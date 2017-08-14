var express = require('express');
var router = express.Router();

router.get('/jason', function(req, res) {
	res.send(`
      <h1>Jason is the best man!</h1>
		`)
});


module.exports = router;