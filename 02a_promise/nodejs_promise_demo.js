var maxTime = 1000;

// Subtract API (Async) written in Promise way
var subtract = function (large, small) {
    // random number between 1 to 1000 - ms
    return new Promise(( resolve, reject) => {
        let waitTime = Math.floor(Math.random()*(maxTime + 1));
        setTimeout(() => {
            if(large < small) {
                reject("Negative result error");
            }
            resolve({value: large - small, time: waitTime});
        }, waitTime);
    });
}

var printResult = function(result) {
    console.log("Returned value is : " + result.value + " (" + result.time + " ms )");
}

// User of Subtract API (Async) in Promise way
console.log("Calling subtract for 100 and 5");
subtract(100, 5)
    .then(function(result) { printResult(result) })     // ES5 - older way
    .catch(function(error) { console.log(error) });

console.log("Calling subtract for 5 and 100");
subtract(5, 100)
    .then(result => printResult(result))    // ES2015 - recommended arrow function way
    .catch(error => console.log(error));

console.log("Calling subtract for 20 and 17");
subtract(20, 17)
    .then(result => printResult(result))
    .catch(error => console.log(error));

console.log("Calling subtract for 17 and 20");
subtract(17, 20)
    .then(result => printResult(result))
    .catch(error => console.log(error));

