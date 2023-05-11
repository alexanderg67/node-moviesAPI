const film = require('../models/film')
const searchFilms =async (req,res) => {
    try { 
       
    let queryObject={}
    let {name,rating,genre,year}=req.query;
    if(name) { 
     queryObject.nameRu=new RegExp(name, 'i')
     
    }
     
    if( year && isFinite(year)){
    queryObject.year=Number(year)
    }
    if(rating) { 
         
        rating=rating.replace(/>=/gi,'$gte-' )
        rating=rating.replace(/<=/gi,'$lte-' )
        rating=rating.replace(/>/gi,'$gt-' )
        rating=rating.replace(/=/gi,'$eq-' )
        rating=rating.replace(/</gi,'$lt-' )
        
         
        const [operator,value] =rating.split('-')
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
    //console.log(queryObject)
    let films= await film.find( queryObject ,{ __v:0 }).skip(skip).limit(limit)
    res.status(200).json(films)
}catch(error)  {
    res.status(500).json({msg: error})
}
}
// Для тестового наполнения БД 
const fillDB =async (req,res) => {
    try{
    let r = await film.create( {nameRu: 'Невероятная жизнь Уолтера Митти',
    nameEn: 'The Secret Life of Walter Mitty',
    year: 2013,
    imdbRating: 7.9 ,
    description: 'Stop Dreaming. Start Living',
    genre: ['комедия','мелодрама' , 'драма']
},
{nameRu: 'Всегда говори ДА',
    nameEn: 'Yes Man',
    year: 2008,
    imdbRating: 6.6 ,
    description: 'Одно слово может изменить твою жизнь',
    genre: ['комедия' ]
},
{nameRu: 'Эффект бабочки',
    nameEn: 'Butterfly Effect',
    year: 2003,
    imdbRating: 8.2 ,
    description: 'Изменишь одно, изменится все',
    genre: ['фантастика', 'драма' ]
},
{nameRu: 'Исходный код',
    nameEn: 'source code',
    year: 2011,
    imdbRating: 7.2 ,
    description: 'Make every second count',
    genre: ['фантастика', 'боевик' ]
},

)
 res.status(200).json({msg: 'films created'})
}catch(error)  {
    res.status(500).json({msg: error})
}
}

module.exports= { searchFilms,fillDB }