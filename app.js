const express = require('express');
const app = express();
//store express application in this variable
const bodyParser = require('body-parser');
//to get data from users
const cookieParser = require('cookie-parser');
//to use cookies. require installation with npm
const mongoose = require('mongoose');
//to install mongoose - ODM(object data modeling)
const path = require('path');
const ejs = require('ejs');

app.use(function(req, res, next){
  res.locals.myurl = req.protocol + '://' + req.get('host') + req.originalUrl;
  var url2 = req.protocol + '://' + req.get('host') + req.originalUrl;
  var url = encodeURIComponent(url2.slice(7));
  var hreff="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F" + url + "%2F&amp;src=sdkpreparse";
  res.locals.hreff = hreff;
  next();
});

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
//that is the way to use any middleware 
app.set('port', process.env.PORT || 3000);
//sets to listen to a port
app.set('view engine', 'pug');

const routes = require('./routes/index');
app.use('/', routes);
//set routes


app.use(express.static(path.join(__dirname, 'public')));
//sets what sources it can use in what folder
//app.use(require('./jason'));

const server = app.listen(app.get('port'), function() {
  console.log('listening to port ' + app.get('port'));

//it's done only to log on shell what port it listens toç

//I'm using mongolab addon for heroku, I had to find MONGOLAB_URI through shell to connect my application to mongodb
if (server.address().port == 3000) {
mongoose.connect('mongodb://localhost/test_project', {
	useMongoClient: true,
});}
else {const uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://heroku_ggck1lhb:t96sat2q3aufmpc7sh8th2r600@ds237815.mlab.com:37815/heroku_ggck1lhb';
    //That is MONGOLAB_URI

    // The http server will listen to an appropriate port, or default to
    // port 5000.
    const theport = process.env.PORT || 5000;

    // Makes connection asynchronously.  Mongoose will queue up database
    // operations and release them when the connection is complete.
    mongoose.connect(uristring, function (err, res) {
      if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
      console.log ('Succeeded connected to: ' + uristring);
      }
    });
}
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
//to work with mongo data go to mlab.com

// Check if we are running on localhost. If not then implement fix for Heroku
if (server.address().port == 3000) {
  app.set('views','./views');
}
else {
  app.set('views', './views');
}
//sets template engine to pug
//by default templates are located in a folder views
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('File Not Found');
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