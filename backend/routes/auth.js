
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.Jwt_Secret;


// Creating a User in DataBase 

router.post('/signup', [

    body('name', 'Enter a valid name , name length should be more than 6').isLength({min : 6}),
    body('email', 'Enter a valid email').isEmail(),
    body('password' , "Enter a valid password ").isLength({min:6})
],
 async(req , res) =>{
   let success = false;
   const errors = validationResult(req);

   if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array()});
   }
   try {   
    let user = await User.findOne({email:req.body.email});
    if(user){
        return res.status(400).json({success, error : "user with this email already exits , please try with different email"});
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password , salt);
    user = await User.create({
        name: req.body.name,
        email : req.body.email,
        password:secPass
    })
    success = true;  
    const data = {
        user:{ id: user.id }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    console.log(success, authToken);
    res.json({success , authToken});  

   } catch (error) {
     console.log(error.massage);
     res.status(500).send("Internal server Error");

   }

});



// Authenticating a User 


router.post('/login', [
   body('email', "Enter a valid email").exists(),
   body('password', "Enter a valid Password").exists()
],

async(req, res)=>{
    let success = false;
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error : errors.array()});
    }

    const {email, password} = req.body;
    try {
     
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({success , error : "Please try again with correct Credential"});
        }
        
        const passCompare = await bcrypt.compare(password, user.password);
        if(!passCompare){
            return res.status(400).json({success , error : "Please try again with correct Credential"});
        }

        success = true;

        const data= {
            user:{
                id : user.id,
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(success, authToken);

        res.send({success, authToken});
        
    } catch (error) {
       console.log(error.massage);
       res.status(500).send("Internal Server Error");  
    }
})



module.exports= router;
