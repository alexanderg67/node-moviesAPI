const express =require('express')
const router =express.Router()
const filmCntrl=require('../controllers/films')
router.route('/').get(filmCntrl.searchFilms);
module.exports= router