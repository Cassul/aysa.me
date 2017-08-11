var express = require('express');
var app = express();
var router = express.Router;

app.set('port', process.env.PORT || 3000);

app.get('/jason', function(req, res) {
	res.send(`
      <h1>Jason is the sexiest and sweetiest man!</h1>
		`)
} )

var server = app.listen(app.get('port'), function() {
	console.log('listening to port ' + app.get('port'))
}); 

module.exports = router;