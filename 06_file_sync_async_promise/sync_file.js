var fs = require('fs');

console.log('File has size: ' + fs.statSync('syncfile.txt').size + ' bytes' );

// Synchronous read
console.log("File Contents: " + fs.readFileSync('syncfile.txt', 'utf8').toString());

console.log("Going to do file operation...");