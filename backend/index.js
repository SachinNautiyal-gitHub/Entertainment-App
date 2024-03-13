const express = require('express');
const connectToMongo = require('./DB');

const app = express();
connectToMongo();

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
// app.use('/api/data', require('./routes/data'));

app.listen(5000, (req, res)=>{
    console.log("server started listening at port 5000")
})
