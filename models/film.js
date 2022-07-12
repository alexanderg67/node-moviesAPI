
const mongoose =require('mongoose')
 
const film= new mongoose.Schema ({
nameRu: {
    type: String,
    required: [true,'Provide Username']
},
nameEn: {
    type: String,
   
},
year : Number,
imdbRating : Number,
description: String,
posterUrl: String,
genre:[String]
})
let filmModel=mongoose.model('Film',film)
module.exports= filmModel;