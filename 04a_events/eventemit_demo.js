var Message =  require('./message');

// function approach
// var results = function();

// Inheritance approach
var results = new Message();

results.on('end', function(num) {
    console.log("Got " + num + " message event.");
});

results.on('message', function(msg) {
    console.log("   Received Message -> " + msg);
});

results.on('begin', function() {
    console.log("Begin...");
});

console.log("Waiting for emitted messages...")