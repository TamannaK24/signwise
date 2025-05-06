// bridge.js

require('dotenv').config();  // Load .env variables

const mongoose = require('mongoose');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// 1. Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✔ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// 2. Schema & model
const sensorSchema = new mongoose.Schema({
    Flex1: Number,
    Flex2: Number,
    Flex3: Number,
    Flex4: Number,
    Flex5: Number,
    letter: String
}, { timestamps: true });
const SensorReading = mongoose.model('SensorReading', sensorSchema);

// 3. Serial port config
const PORT_NAME = process.env.SERIAL_PORT || 'COM3';
const BAUD_RATE = parseInt(process.env.BAUD_RATE, 10) || 9600;

// 4. Open port & parser
const port = new SerialPort({ path: PORT_NAME, baudRate: BAUD_RATE });
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// 5. Latest values
let latestReadings = {};
let latestLetter = '';

// 6. Handle data
parser.on('data', async rawLine => {
    const trimmed = rawLine.trim();
    console.log('📥 Raw data:', trimmed);

    const docData = trimmed.includes('|')
        ? trimmed.split('|').map(p => p.trim()).reduce((acc, part) => {
            const [key, val] = part.split(':').map(s => s.trim());
            acc[key] = Number(val);
            return acc;
        }, {})
        : { letter: trimmed };

    if (trimmed.includes('|')) {
        latestReadings = docData;
        console.log('📥 Parsed readings:', latestReadings);
    } else {
        latestLetter = trimmed;
        console.log('📥 Parsed letter:', latestLetter);
    }

    // 7. Save
    try {
        const saved = await SensorReading.create(docData);
        console.log(`💾 Saved at ${saved.createdAt.toISOString()}`);
    } catch (e) {
        console.error('❌ Save error:', e);
    }
});

// 8. Errors
port.on('error', err => console.error('⚠️ Serial port error:', err.message));

// 9. Exports
module.exports = { latestReadings, latestLetter };
