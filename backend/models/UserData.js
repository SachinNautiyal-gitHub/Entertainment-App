
const mongoose = require('mongoose');

const UserData = new mongoose.Schema({

    user :{
         type : mongoose.Schema.Types.ObjectId,
          ref : "user"

    },

    moviename :{
        type : String,
    },

    movieImg :{
        type: String
    }



})


module.exports = mongoose.model('data' ,UserData);