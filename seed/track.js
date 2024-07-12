const {Track} = require('../models');

Track.create({
    "title": "Not Like Us",
    "artist": "Kendrick Lamar",
  }).then((song)=>{
    console.log('---New Song \n', song);
  }).catch((error) =>{
    console.log(error);
  })