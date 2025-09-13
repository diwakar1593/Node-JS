var http = require('http');

var server = http.createServer(function (req, res) {
    console.log("Incoming request: " + req.method + " " + req.url);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello Nodejs from Node.js HTTP Server###' + '\n');
});

server.listen(8080);
console.log("HTTP Server listening on port 8080. Access it at http://localhost:8080/");