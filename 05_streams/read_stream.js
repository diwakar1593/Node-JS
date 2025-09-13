// Import the 'fs' module to work with the file system
var fs = require('fs');

// Create a read stream for 'large_file.txt' with UTF-8 encoding
// This allows us to read the file in chunks
var readStream = fs.createReadStream('large_file.txt', { encoding: 'utf8' });

// Set up a counter to track the number of chunks read
var count = 0;
// Define a callback function to handle the 'readable' event
function readCallback() {
    // Read data from the stream in chunks
    var buffer;
    // Use a while loop to read all available chunks
    while (  buffer = readStream.read() ) {
        count++;
        console.log('>>>>>>>>>>>>>>>>>>>    ' + count + ')     Data>>>>>>>>>>>>>>>>>>:', buffer );
    }
}

// Attach the 'readable' event listener to the read stream
// When the stream is readable, the readCallback function will be invoked
// This allows us to process the data as it becomes available
readStream.on('readable', readCallback);

// Attach the 'end' event listener to the read stream
// This will be called when there is no more data to read from the stream
// We log the total number of chunks read
// This helps us understand how many chunks were processed
readStream.on('end', function() {
    console.log('Stream ended. Total chunks read: ' + count);
});