const express = require('express');

const dotEnv  = require('dotenv').config();
const connectDB = require('./configuration/config')
const userRoutes =  require('./routes/web');

const app = express()

app.use('/api/user', userRoutes)


connectDB();

app.listen(3000, ()=>{
    console.log("Server running at  port 3000")
})