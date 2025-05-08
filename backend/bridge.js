// bridge.js

require('dotenv').config();  // Load .env variables

const mongoose = require('mongoose');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// 1. Connect to MongoDB using your environment variable
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✔ MongoDB connected'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// 2. Define a Mongoose schema & model for sensor readings
const sensorSchema = new mongoose.Schema(
    {
        Flex1: Number,
        Flex2: Number,
        Flex3: Number,
        Flex4: Number,
        Flex5: Number,
        letter: String,
    },
    { timestamps: true }
);
const SensorReading = mongoose.model('SensorReading', sensorSchema);

// 3. Serial port configuration (set in .env or defaults)
const PORT_NAME = process.env.SERIAL_PORT || 'COM3';  // e.g. 'COM3' or '/dev/ttyUSB0'
const BAUD_RATE = parseInt(process.env.BAUD_RATE, 10) || 9600;

// 4. Initialize serial port & parser
const port = new SerialPort({ path: PORT_NAME, baudRate: BAUD_RATE });
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// 5. Variable to hold the latest readings
let latestReadings = {};

// 6. Handle incoming serial data
parser.on('data', async rawLine => {
    console.log('📥 Raw data:', rawLine);

    // Parse line into { Flex1: 123, Flex2: 98, ... }
    const readings = rawLine
        .split('|')
        .map(p => p.trim())
        .reduce((acc, part) => {
            const [key, val] = part.split(':').map(s => s.trim());
            acc[key] = Number(val);
            return acc;
        }, {});

    // 7. Save parsed readings into our variable
    latestReadings = readings;

    // 8. Print the variable to console
    console.log('🛠 Latest readings var:', latestReadings);

    // 9. Save to MongoDB
    try {
        const doc = await SensorReading.create(readings);
        console.log(`💾 Saved reading at ${doc.createdAt.toISOString()}`);
    } catch (err) {
        console.error('❌ Error saving reading:', err);
    }
});

// 10. Serial port error handling
port.on('error', err => console.error('⚠️ Serial port error:', err.message));

// 11. Export latestReadings for use in other modules
module.exports = { latestReadings };