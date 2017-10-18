var express = require('express');
var app = express();
//store express application in this variable
var reload = require('reload');
//to reload the page after updating


app.set('port', process.env.PORT || 3000);
//sets to listen to a port
app.set('view engine', 'pug');
app.set('views', 'app/views');
//sets template engine to pug
//by default templates are located in a folder views
app.get('/resources', function(req, res) {
    res.render('resources');
});
app.get('/', function(req, res) {
    //respond on request. set the root route
    /*res.render('index');*/
	res.render('main');
} );

app.use(express.static('public'));
//sets what sources it can use in what folder
//app.use(require('./jason'));

var server = app.listen(app.get('port'), function() {
	console.log('listening to port ' + app.get('port'))
});
//it's done only to log on shell what port it listens toç

reload(app);