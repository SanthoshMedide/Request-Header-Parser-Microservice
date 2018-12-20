var express = require('express');
var router = express.Router();
const requestIp = require('request-ip');
var useragent = require('useragent');

router.get('/', function(request, response){

	console.log(request.headers["accept-language"] );
	console.log(request.connection.remoteAddress);
	console.log(request.headers["X-Forwarded-For"]);
	console.log(requestIp.getClientIp(request) );
	response.json({ipaddress:request.connection.remoteAddress, 
		language: request.headers["accept-language"],
		software:request.headers['user-agent'] });
});

module.exports =router; 