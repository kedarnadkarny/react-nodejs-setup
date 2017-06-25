var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var PORT = 3001

app.use(bodyParser.json())

app.use(function(req, res, next) {
 res.setHeader('Access-Control-Allow-Origin','*');
 res.setHeader('Access-Control-Allow-Credentials', 'true');
 res.setHeader('Access-Control-Allow-Methods','GET,HEAD,OPTIONS,POST,PUT,DELETE');
 res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//and remove cacheing so we get the most recent comments
 res.setHeader('Cache-Control', 'no-cache');
 next();
});

app.get('/', function(req, res) {
	res.send('Hello');
})

app.listen(PORT)
console.log('Running on port '+ PORT)
