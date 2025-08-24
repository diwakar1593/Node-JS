// Arrow function way - ES2015
//setTimeout(() => console.log("Timed out after 3000 milliseconds"), 3000);

// ES5 way of writing
setTimeout(function() {
    console.log("Timed out after 3000 milliseconds");
}, 3000);
console.log("Timed started ...");