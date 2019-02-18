var express = require('express');
var https = require('https');
// var http = require('http');
var fs = require('fs');
var app = express();

var key = fs.readFileSync('khiemaalto.com.key');
var cert = fs.readFileSync( 'khiemaalto.com.crt' );

var options = {
	key: key,
	cert: cert,
	ca: [fs.readFileSync( 'rootCa.crt' )],
	requestCert: true
};

// routes will go here
app.get('/colors', function(req, res) {
	res.json([
		{
			'thing': 'banana',
			'color': 'yellow'
		},
		{
			'thing': 'cheese',
			'color': 'blue'
		},
		{
			'thing': 'apple',
			'color': 'space grey'
		}
	]);
});

https.createServer(options, app).listen(443);
// http.createServer(app).listen(80);


