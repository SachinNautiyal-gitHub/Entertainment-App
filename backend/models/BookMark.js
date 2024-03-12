
const mongoose = require('mongoose');

const userBookMarks = new mongoose.Schema({

    user :{
         type : mongoose.Schema.Types.ObjectId,
          ref : "user"
    },
    Title: String,
    Year: Number,
    Genre: String,
    Actors: String,
    Plot: String,
    Language: String,
    Country: String,
    Awards: String,
    Poster: String,
    imdbRating: Number,
    imdbVotes: String,
    imdbID: String,
    Type: String,
    VideoLink: String,

})


module.exports = mongoose.model('data' ,userBookMarks);