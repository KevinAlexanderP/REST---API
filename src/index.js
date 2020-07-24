const express = require('express'),
path = require('path'),
morgan = require('morgan')
// mysql = require('mysql'),
// myConnection = require('express-myconnection');


const app = express()

// Declaring middlewares
app.use(morgan('dev'))

// Starting server
app.listen(3000, ()=>{
    console.log('Server on port 3000')
})
