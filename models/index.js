const mongoose = require("mongoose");
require("dotenv").config(process.env.MONGO_URI);

const Track = require('./track');

const db = mongoose.connection;

db.once("open", () => console.log(`Connected to MongoDb at ${db.host}.${db.port}`));
db.on('error', (error) => console.log("Database error \n", error));

module.exports = {
    //models export
    Track
}