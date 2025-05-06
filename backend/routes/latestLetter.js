// routes/latestLetter.js
const express = require('express');
const router = express.Router();
const { latestLetter } = require('../bridge');

router.get('/', (req, res) => {
    res.json({ letter: latestLetter });
});

module.exports = router;
