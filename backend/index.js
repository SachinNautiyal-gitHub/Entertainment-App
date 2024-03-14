const express = require('express');
const connectToMongo = require('./DB');
const cors = require('cors')

const app = express();
connectToMongo();

app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/data', require('./routes/data'));

app.listen(5000, ()=>{
    console.log("server started listening at port 5000")
})


