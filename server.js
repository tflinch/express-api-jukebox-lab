require('dotenv').config()
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000;


app.use(methodOverride("_method"));
app.use(express.json());


const server = app.listen(PORT, () =>{
    console.log("🚀 Server Listening on PORT:", PORT)
});

module.exports= server; 