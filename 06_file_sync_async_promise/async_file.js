
var fs = require('fs');

// Asynchronous read
// Note: This is non-blocking code
// The file read operation is offloaded to the system kernel whenever possible.
// Other operations can be performed while the file is being read.
// When the file has been read, the kernel tells Node.js so that the callback function is called.
// If the file is very large, it might take a long time to read it all,
// so other operations can be performed in the meantime.
// This is the most common way to read files in Node.js.
fs.stat('asyncfile.txt', function(err, stats) {
    if (err) {
        console.log("STAT ERROR: " + err.code + " : " + err.message);
        return;
    } else {
        console.log("File has size:" + stats.size + " bytes" );
        fs.readFile('asyncfile.txt', 'utf8', function(err, data) {
            if (err) {
                console.log("READ ERROR: " + err.code + " : " + err.message);
                return;
            } else {
                console.log("File Contents: " + data.toString());
            }
        });
    }
});

console.log("Going to do file operation...");