const express = require('express');
const router = express.Router();
const Letter = require('../models/Letter'); // Make sure this path is correct

// GET /api/latestLetter
router.get('/', async (req, res) => {
    try {
        const latest = await Letter.findOne().sort({ createdAt: -1 }); // Sort by newest
        if (!latest) {
            return res.status(404).json({ message: 'No letter found' });
        }
        res.json({ letter: latest.letter });
    } catch (error) {
        console.error('Error fetching latest letter:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
