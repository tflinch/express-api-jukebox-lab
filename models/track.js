const mongoose = require("mongoose");

const trackSchema = new mongoose.Schema({
    title: String,
    artist: String,
}, {
    timestamps: true,
});

const Track = mongoose.model("Track", trackSchema);

module.exports = Track;