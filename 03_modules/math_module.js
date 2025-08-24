var maxTime = 1000;
var name = "Math Module";

// Subtract API - Implementor of callback
// export.subtract = function(large, small, callback) {
var subtract = function(large, small, callback) {
    // random number between 1 to 1000
    var waitTime = Math.floor(Math.random()*(maxTime+1)); 
    if (large < small) {
        setTimeout(function() {
            callback(new Error("Negative result error"), null, waitTime);
        }, waitTime);
    } else {
        setTimeout(function() {
            callback(null, large - small, waitTime);
        }, waitTime);
    }
};

module.exports.subtract = subtract;
module.exports.modulename = name;