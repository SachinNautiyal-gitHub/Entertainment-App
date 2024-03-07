
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const DB_key = process.env.DB_KEY;

const connectToMongo =  async () =>{
    
    try {
        await mongoose.connect(DB_key);
        console.log("connected to mongoDb Atlas")
    } catch (error) {
        console.error("failes to connect with mongodb atlas" , error);
    }
}

module.exports = connectToMongo;