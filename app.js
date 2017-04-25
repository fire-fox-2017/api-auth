"use strict"

const express = require('express')

var index = require('./routes/index');
var users = require('./routes/users');

//UNTUK GABUNGIN VIEW MUNGKIN???
// var path = require('path');
var bodyParser = require('body-parser');
let app = express()


//UNTUK VIEW TERNYATA
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api', users);


app.listen(3000)
module.exports = app;