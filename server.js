var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var hbs = require('hbs');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// var coursesController = require('./controllers/courses.js');
var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');
var coursesController = require('./controllers/courses.js');
var app = express();

// ADD THE NAME OF YOUR DATABASE
// mongoose.connect('mongodb://localhost/course_tracker');
mongoose.connect('mongodb://localhost/golf_db');
var db = mongoose.connection;
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public/styles'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(methodOverride('_method'));

app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

// app.use('/users/:userId', coursesController);
app.use('/users', usersController);
app.use('/sessions', sessionsController);
app.use('/courses', coursesController);
db.once('open', function() {
  console.log('database connected');
});

app.listen(4000);
