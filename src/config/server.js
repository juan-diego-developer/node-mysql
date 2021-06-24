// const { json } = require("body-parser");

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// settinngs
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join (__dirname, '../app/views'));


// middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

module.exports = app;
