const express = require("express");
const router = express.Router();

router.get('/tracks', (req, res) => {
console.log(req.body.name);
res.end()
})