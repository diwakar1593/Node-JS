const maxTime = 1000;
const name = "Math Module";

// Subtract API - Implementor of callback
// export.subtract = function(large, small, callback) {
const subtract = function(large, small, callback) {
    // random number between 1 to 1000
    const waitTime = Math.floor(Math.random()*(maxTime+1)); 
    if (large < small) {
        setTimeout(() => {
            callback(new Error("Negative result error"), null, waitTime);
        }, waitTime);
    } else {
        setTimeout(() => {
            callback(null, large - small, waitTime);
        }, waitTime);
    }
};

export { subtract };
export { name as modulename };