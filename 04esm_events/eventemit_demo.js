// ES2015 JavaScript and ESM modules
import EventEmitter from 'events';

// Publisher API
var getMessages = () =>{
    // Create an EventEmitter object
    const msgEmitter = new EventEmitter();
    // Simulate async event emission
    setTimeout(() => {
        // Emit events
        msgEmitter.emit('begin');
        msgEmitter.emit('message','node.js');
        msgEmitter.emit('message','express.js');
        msgEmitter.emit('end',2);
    },3000);
    return msgEmitter;
};

// User of getMessages API - Subscriber
// Register event handlers
const results = getMessages();

// Event handler for 'end' event
results.on('end', num => {
    console.log("Got " + num + " message event.");
});

// Event handler for 'message' event
results.on('message', msg => {
    console.log("   Received Message -> " + msg);
});

// Event handler for 'begin' event
results.on('begin', () => {
    console.log("Begin...");
});

// Keep the program running to listen for events
console.log("Waiting for emitted messages...")