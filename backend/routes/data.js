
const express = require('express');
const router = express.Router();
const Movies = require('../models/Movies')
const BookMark = require('../models/BookMark')
const fetchuser = require('../middleware/fetchUser')



// Get all the movies form database

router.get('/moviesdata', 
fetchuser, 
 async(req, res)=>{    
    try {
        const movies = await Movies.find();
        res.json(movies);
    } catch (error) {
        console.log(error.message);
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
    let movieId = req.params.id;
    let movie = await Movies.findById(movieId);

    let bookMarkedMovie = await BookMark.findById(movie._id);
    if(bookMarkedMovie){
        return res.status(400).send("BookMark already exits");
    }  
    else try {
        let bookmarkMovie = movie.toObject();
        const bookmark = new BookMark({ ...bookmarkMovie , user : req.user.id});
        let bookmarked =  await bookmark.save();
        res.json({"Success":"bookmark added successfully"});
        
    } catch (error) {
         console.log(error.message);
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