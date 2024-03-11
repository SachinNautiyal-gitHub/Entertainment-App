
const mongoose = require('mongoose');
// const moviesModel = require('./models/Movies.js')
// const  jsondata = require ('./data.js');  

const dotenv = require('dotenv');
dotenv.config();

const DB_key = process.env.DB_KEY;

const connectToMongo =  async () =>{
    
    try {
        await mongoose.connect(DB_key);
        // await moviesModel.insertMany(jsondata);
        console.log("connected to mongoDb Atlas")
    } catch (error) {
        console.error("failes to connect with mongodb atlas" , error.errors);
    }
}

module.exports = connectToMongo;