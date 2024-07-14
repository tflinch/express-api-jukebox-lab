const express = require("express");
const router = express.Router();

// Data Import
const { Track } = require('../models');

router.get('/', async (req, res) => {
    try {
        const tracksFound = await Track.find({});
        if (tracksFound) {
            console.log('found track', tracksFound);
        }
        console.log(req.body.name);
        res.status(200).json(tracksFound);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});
router.post('/', async (req, res) => {
    console.log(req.body)
    res.end()
});

module.exports = router;