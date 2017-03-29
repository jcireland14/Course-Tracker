var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var hbs = require('hbs');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var db = require('./db');
var cookieParser = require('cookie-parser');
// var coursesController = require('./controllers/courses.js');
var usersController = require('./controllers/users.js');
var sessionsController = require('./controllers/sessions.js');
var coursesController = require('./controllers/courses.js');
var app = express();

// ADD THE NAME OF YOUR DATABASE
// mongoose.connect('mongodb://localhost/course_tracker');
// mongoose.connect('mongodb://localhost/golf_db');
// var db = mongoose.connection;
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
  }
);
mongoose.connection.once('open', function() {
  console.log("⚡⚡  Mongoose has connected to MongoDB! ⚡⚡");
});
app.set('view engine', 'hbs')
/////\\\\/\\/\/\/\/\/
app.use(express.static(__dirname + '/public/styles'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

// app.use('/users/:userId', coursesController);
app.use('/users', usersController);
app.use('/sessions', sessionsController);
app.use('/users/:userId/courses', coursesController);
db.once('open', function() {
  console.log('database connected');
});

app.listen(process.env.PORT || 4000);
