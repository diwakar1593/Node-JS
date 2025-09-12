// process_demo.js
// A simple demonstration of using the process module in Node.js
// This script shows how to access process information
// and environment variables using the built-in process module.
var process = require('process');
// Display some process information
// You can run this script using Node.js
// node process_demo.js
// This will print the current process ID, current working directory, and Node.js version
console.log('Process ID:', process.pid);
console.log('Current Working Directory:', process.cwd());
console.log('Node.js Version:', process.version);