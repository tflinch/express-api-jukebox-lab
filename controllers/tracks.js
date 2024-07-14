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
    console.log('POST Request',req.body)
    const {title, artist }= req.body;
    try {
        const newTrack = await Track.create({title:title, artist:artist})
        console.log('New Track:', newTrack)
        res.end()
    } catch (error) {
        console.log("----- ERROR creating new track----", error);
        res.status(500).json({ error: 'Server error' });
    }
    res.end()
});

module.exports = router;