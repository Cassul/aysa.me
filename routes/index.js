const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/resources', function(req, res) {
    res.render('resources');
});

router.get('/language', function(req, res) {
    res.render('language');
});

router.get('/subscribe', (req, res, next) => {
  res.render('subscribe');
});

router.post('/subscribe', function(req, res, next) {
	if (req.body.email && req.body.name) {
      //create object with form input
      const userData = {
      	email: req.body.email,
      	name: req.body.name
      };
      //use schema's create method to insert object into DB
      User.create(userData, (error, user) => {
        if (error) {
        	return next(error);
        }
        else {
        	return res.redirect('/');
        }
      });
	}
	else {
		var err = new Error('All fields required.');
		err.status = 400;
		return next(err);
	}
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