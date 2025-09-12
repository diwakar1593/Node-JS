var os = require('os');
// Display some OS information
// You can run this script using Node.js

var convertToMb = function(values) {
    return( Math.round(values / 1024 / 1024 * 100) / 100 );
}

// This will print the OS platform, total memory, free memory, CPU architecture, and number of CPU cores
console.log('Operating System Platform:', os.platform());
console.log('Total Memory (MB): ' + convertToMb(os.totalmem()) + ' MB');
console.log('Free Memory (MB): ' + convertToMb(os.freemem()) + ' MB');
console.log('CPU Architecture:', os.arch());
console.log('Number of CPU Cores:', os.cpus().length);          