import EventEmitter from 'events';

// Inheritance - 00 concepts
export default class Message extends EventEmitter {
    constructor() {
        // call the super class constructor
        super();
        // simulate async events
        setTimeout(() => {  // ES2015 arrow function
            // emit events
            this.emit('begin');
            this.emit('message', 'node.js');
            this.emit('message', 'express.js');
            this.emit('end', 2);
        }, 3000);
    }
};