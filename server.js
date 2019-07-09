// start up the database
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// import environmental variables from our variables.env file
require('dotenv').config({path:'variables.env'});

//import quote schema
require('./models/Quote');


// Connect dat DB
mongoose.connect(process.env.DATABASE);

// tell Mongoose to use es6 promises
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(err.message);
});

var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({exetended: false}));
app.use(bodyParser.json());

const routes = require('./routes/index');

const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

// Handle our own routes
app.use('/api', routes);


app.listen(PORT, function() {
  console.log(ENV['DATABASE']);
  console.log('Express is up on port ' + PORT);
});
