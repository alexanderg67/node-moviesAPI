const { query } = require('express');
const film = require('../models/film')
const searchFilms =async (req,res) => {
     
    let queryObject={}
    let {name,rating,genre}=req.query;
    if(name) { 
     queryObject.nameRu=new RegExp(name, 'i')
     
    }
    if(rating) { 
        rating=rating.replace(/>/gi,'$gte-' )
        rating=rating.replace(/=/gi,'$eq-' )
        rating=rating.replace(/</gi,'$lt-' )
        
        let [operator,value] =rating.split('-')
        if(operator &&value && isFinite(value)) {
        queryObject.imdbRating={[operator]: Number(value ) }
        }
        

    }
    if(genre) { 
    queryObject.genre=String(genre)
    }
    const page= Number(req.query.page) || 1;
    const limit =Number(req.query.limit) || 10;
    const skip=(page-1)* limit;
    //console.log('skip and limit:', skip,limit)
    console.log(queryObject)
    let result= film.find( queryObject ,{ __v:0 })
    result=result.skip(skip).limit(limit)
    const films= await result;
    res.status(200).json(films)
     
}

module.exports= { searchFilms, }