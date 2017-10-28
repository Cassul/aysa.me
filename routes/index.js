var express = require('express');
var router = express.Router();

router.get('/resources', function(req, res) {
    res.render('resources');
});

router.get('/language', function(req, res) {
    res.render('language');
});

router.post('/language', (req, res) => {
  res.cookie('language', req.body.language); //set cookie's name and value
  const language = req.body.language; 
  if (language == 'english') {
    res.redirect('/');
  } else {
    res.redirect('/russian');
  }
});

router.get('/', function(req, res) {
    //respond on request. set the root route
  const lang = req.cookies.language; 
  if (lang == 'english') {
    console.dir('redirected to english root');
    res.render('main');
  }
  if (lang == 'russian') {
    res.redirect('/russian');
  }
  if (!lang) {
    res.redirect('/language');
}
});
module.exports = router;