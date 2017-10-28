const express = require('express');
const app = express();
//store express application in this variable
const reload = require('reload');
//to reload the page after updating
const bodyParser = require('body-parser');
//to get data from users
const cookieParser = require('cookie-parser');
//to use cookies. require installation with npm

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
//that is the way to use any middleware 
app.set('port', process.env.PORT || 3000);
//sets to listen to a port
app.set('view engine', 'pug');

var server = app.listen(app.get('port'), function() {
  console.log('listening to port ' + app.get('port'));
});
//it's done only to log on shell what port it listens toç

// Check if we are running on localhost. If not then implement fix for Heroku
if (server.address().address == '::') {
  app.set('views','./views');
}
else {
  console.dir(server.address().address);
  app.set('views', 'app/views');
}
//sets template engine to pug
//by default templates are located in a folder views
app.get('/resources', function(req, res) {
    res.render('resources');
});

app.get('/language', function(req, res) {
    res.render('language');
});



app.get('/', function(req, res) {
    //respond on request. set the root route
  const lang = req.cookies.language; 
  if (lang == 'english') {
    console.dir('redirected to english root');
    res.render('main');
  }
  if (lang == 'russian') {
    res.redirect('/russian');
  }
  else 
    res.redirect('/language');
});

app.post('/language', (req, res) => {
  console.dir(req.body.language);
  res.cookie('language', req.body.language); //set cookie's name and value
  const language = req.body.language; 
  if (language == 'english') {
    res.redirect('/');
    console.dir(req.cookies.language);
  } else {
    res.redirect('/russian');
  }
});

app.use(express.static('public'));
//sets what sources it can use in what folder
//app.use(require('./jason'));



reload(app);