
const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies')
const BookMark = require('../models/BookMark')
const fetchuser = require('../middleware/fetchUser')



// Get all the movies form database

router.get('/moviesdata', fetchuser,  async(req, res)=>{    
    try {
        const movies = await Movies.find();
        res.json(movies);
    } catch (error) {
        console.log(error.massage);
        res.status(500).send("Internal server Error");
    }
});



// Get users BookMarked movies from the database


router.get('/bookmark', fetchuser, async(req,res)=>{  
    try {
        const movies = await BookMark.find({user: req.user.id});
        res.json(movies);      
    } catch (error) {
        console.log(error.massage);
        res.status(500).send('Internal server Error');
    }

});



// Adding movie to Bookmark

router.post('/add/:id', fetchuser, async(req, res)=>{
    let bookMarkedMovie = await BookMark.findById(req.params.id);
    if(bookMarkedMovie){
        return res.status(400).send("BookMark already exits");
    }  
    try {
        let movie = await Movies.findById(req.params.id);
        const bookmark = new BookMark({ ...movie , user : req.user.id});

        let bookmarked =  await bookmark.save();
        res.json(bookmarked);
        
    } catch (error) {
         console.log(error.massage);
         res.status(500).send("Internal server Error")
    }   

})




//  Remove movie from bookmark
router.delete('/remove/:id', fetchuser, async(req, res)=>{

    let movie = await BookMark.findById(req.params.id);
    if(!movie){
        return res.status(400).send("not Found");
    }

    if(movie.user.toString() !== req.user.id){
        return res.status(401).send("not Allowed");
    }

    movie = await BookMark.findByIdAndDelete(req.params.id);
    res.json({"Success":"Bookmark removed Successfully"})

})




module.exports = router;