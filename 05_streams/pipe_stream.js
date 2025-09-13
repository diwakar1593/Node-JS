// Import the 'fs' module to work with the file system
var fs = require('fs');

// Pipe the read stream to standard output
// This will read the contents of 'large_file.txt' and print it to the console
fs.createReadStream('large_file.txt').pipe(process.stdout);