var express = require('express');
var router = express.Router();
var reload = require('reload');


router.get('/jason', function(req, res) {
	res.send(`
      <h1>Aysa Matueva</h1>
        <p>
Phone   number:   0401653651
E-mail:   aysa@matueva.com
Personal   website:      aysamatueva.com
Linkedin   profile:    https://www.linkedin.com/in/aysamatueva Facebook   profile:    https://www.facebook.com/aysa.matueva</p>
      <script src="/reload/reload.js"></script>

		`)
});


module.exports = router;