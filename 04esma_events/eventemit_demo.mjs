import Message from './message.mjs'; // import Message class

// create a Message object
const results = new Message();

// register event handlers

results.on('end', num => {
    console.log("Got " + num + " message event.");
});

results.on('message', msg => {
    console.log("   Received Message -> " + msg);
});

results.on('begin', () => {
    console.log("Begin...");
});

console.log("Waiting for emitted messages...")