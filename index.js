"use strict";
//require http module
var http = require("http");
//create server
http.createServer(function (request, response) {
    //send the HTTP header
    //HTTP Status: 200 : OK
    //Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    //send the response body as "Hello World"
    response.end('Hello Jamal'); //end the response  
}).listen(3000); //the server object listens on port 3000
//print to console
console.log('Server running at http://  :3000/');
