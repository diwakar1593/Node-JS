var mathModule = require('./math_module');

// ===========================================================
// User of the subtract API
var handleCallback = function(error, result, time) {
    if (error) {
        console.log("ERROR: " + error.message + " (" + time + " ms)");
    } else {
        console.log("Returned value is : " + result + "(" + time + " ms)");
    }
};

console.log("Calling subtract for 100 and 5");
mathModule.subtract(100, 5, handleCallback); // 95
console.log("Calling subtract for 5 and 100");
mathModule.subtract(5, 100, handleCallback); // -95 error
console.log("Calling subtract for 20 and 17");
mathModule.subtract(20, 17, handleCallback); // 3
console.log("Calling subtract for 17 and 20");
mathModule.subtract(17, 20, handleCallback); // -3 error
console.log("======================================");

console.log("The 'name' variable is (which has been exported) : " + mathModule.modulename);