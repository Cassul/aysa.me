var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
	res.send(`
      <h1>Jason is the best boyfriend!</h1>
		`)
} )

var server = app.listen(app.get('port'), function() {
	console.log('listening to port ' + app.get('port'))
})