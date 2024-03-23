const express = require('express');
const connectToMongo = require('./DB');
const cors = require('cors')

const app = express();
connectToMongo();

app.use(cors()); // using cors middleware to fix cors error 
app.options('*', cors());
app.use(express.json()); // using express.json middleware , to send and recive data in the server in json format without any error.

app.use('/api/auth', require('./routes/auth')); //defining the auth routes 
app.use('/api/data', require('./routes/data')); // defining the data routes 

app.use('/', (req, res)=>{
    res.send("hello from server");
})

//server starting 
app.listen(5000, ()=>{
    console.log("server started listening at port 5000")
})


