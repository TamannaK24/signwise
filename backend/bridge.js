require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✔ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// SensorReading model (flex data)
const sensorSchema = new mongoose.Schema({
    Flex1: Number,
    Flex2: Number,
    Flex3: Number,
    Flex4: Number,
    Flex5: Number,
    letter: String
}, { timestamps: true });
const SensorReading = mongoose.model('SensorReading', sensorSchema);

// Letter model (individual letters for sign detection)
const Letter = require('./models/Letter'); // ✅ Ensure models/Letter.js exists

// Serial port configuration
const PORT_NAME = process.env.SERIAL_PORT || 'COM3';
const BAUD_RATE = parseInt(process.env.BAUD_RATE, 10) || 9600;

// Open serial port and set up line parser
const port = new SerialPort({ path: PORT_NAME, baudRate: BAUD_RATE });
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// Latest values
let latestReadings = {};
let latestLetter = '';

// Handle incoming serial data
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

        // Save letter to Letter collection
        try {
            const savedLetter = await Letter.create({ letter: latestLetter });
            console.log(`💾 Saved letter "${latestLetter}" at ${savedLetter.createdAt.toISOString()}`);
        } catch (e) {
            console.error('❌ Error saving letter to Letter collection:', e);
        }
    }

    // Save all sensor data (with or without letter)
    try {
        const savedReading = await SensorReading.create(docData);
        console.log(`💾 Sensor reading saved at ${savedReading.createdAt.toISOString()}`);
    } catch (e) {
        console.error('❌ Error saving sensor data:', e);
    }
});

// Handle serial port errors
port.on('error', err => console.error('⚠️ Serial port error:', err.message));

// Export latest values (if used elsewhere)
module.exports = { latestReadings, latestLetter };
