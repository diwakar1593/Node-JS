var http = require('http');
const path = require( 'path' );

// HTTP request options
var options = {
    host: 'info.cern.ch',
    port: 80,
    path: '/',
    method: 'GET'
};
// Make HTTP request
console.log("Going to make http request...");
// The callback is invoked when a response is received.
var req = http.request(options, function(response) {
    console.log("Response started...");
    console.log("\n>>>http.request response: " + response.statusCode + " " + response.statusMessage + "\n");
    response.pipe(process.stdout);
});
req.end();

console.log("Going to make http get...");
// Make HTTP GET request
http.get('http://info.cern.ch/', function(response) {
    console.log("Response started...");
    console.log("\n>>>http.get response: " + response.statusCode + " " + response.statusMessage + "\n");
    response.pipe(process.stdout);
});