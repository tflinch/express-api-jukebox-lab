require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express();
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.send({home: 'homepage'})
})

app.use('/tracks', require("./controllers/tracks"));

const server = app.listen(PORT, () =>{
    console.log("🚀 Server Listening on PORT:", PORT)
});

module.exports= server; 