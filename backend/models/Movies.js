const  mongoose  = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: String,
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
});




module.exports = mongoose.model('movies', MovieSchema);

