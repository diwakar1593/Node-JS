// ES5 JavaScript and CommonJS module
var EventEmitter = require('events').EventEmitter;

// Publisher API
var getMessages = function() {
    var msgEmitter = new EventEmitter();
    setTimeout(function() {
        msgEmitter.emit('begin');
        msgEmitter.emit('message','node.js');
        msgEmitter.emit('message','express.js');
        msgEmitter.emit('end',2);
    },3000);
    return msgEmitter;
};

// User of getMessages API - Subscriber
var results = getMessages();
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