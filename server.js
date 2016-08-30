//INSTRUCTIONS FROM FCC
//
//var express = require('express');
//var app = express();
//
//app.get('/', function (req, res) {
//  res.send('Hello World!');
//});
//
//app.listen(8080, function () {
//  console.log('Example app listening on port 8080!');
//});


var http= require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type: 'text/html'})
  res.end('<h1>Hello World</h1>');
  
  
});

var port = Number(process.env.PORT||3000)

server.listen(port);
