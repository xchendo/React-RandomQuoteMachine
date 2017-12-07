// start up the database
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//import quote schema
require('./models/Quote');


// Connect dat DB

// TODO: get db host from variables.env
mongoose.connect("mongodb://root:10112017@ds023510.mlab.com:23510/xchendo-quotes");
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

app.use('/api', routes);

app.listen(PORT, function() {
  console.log('Express is up on port ' + PORT);
});
