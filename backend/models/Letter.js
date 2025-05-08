const mongoose = require('mongoose');

const LetterSchema = new mongoose.Schema({
    letter: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Adds createdAt and updatedAt
});

module.exports = mongoose.model('Letter', LetterSchema);
