const express = require('express');
const app = express();
//store express application in this variable
const reload = require('reload');
//to reload the page after updating
const bodyParser = require('body-parser');
//to get data from users
const cookieParser = require('cookie-parser');
//to use cookies. require installation with npm
const mongoose = require('mongoose');
//to install mongoose - ODM(object data modeling)

mongoose.connect('mongodb://localhost/test_project', {
	useMongoClient: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
//that is the way to use any middleware 
app.set('port', process.env.PORT || 3000);
//sets to listen to a port
app.set('view engine', 'pug');

var routes = require('./routes/index');
app.use('/', routes);
//set routes

var server = app.listen(app.get('port'), function() {
  console.log('listening to port ' + app.get('port'));
});
//it's done only to log on shell what port it listens toç

// Check if we are running on localhost. If not then implement fix for Heroku
if (server.address().port == 3000) {
  app.set('views','./views');
}
else {
  app.set('views', './views');
}
//sets template engine to pug
//by default templates are located in a folder views

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.use(express.static('public'));
//sets what sources it can use in what folder
//app.use(require('./jason'));



reload(app);