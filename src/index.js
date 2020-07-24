const express = require('express'),
path = require('path'),
morgan = require('morgan')
// mysql = require('mysql'),
// myConnection = require('express-myconnection');


const app = express()
//settings
app.set('port', process.env.PORT ||3000)
app.set('json spaces', 2)


// Declaring middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes
app.use(require('../routes/index'))
app.use(require('../routes/movies'))
// Starting server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port 3000 ${app.get('port')}`)
})
