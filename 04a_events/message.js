var util = require('util');
var EventEmitter = require('events').EventEmitter;

// Message class - inherits from EventEmitter
// ES5 approach - This is how we did inheritance before ES6 classes

function Message() {    // derived class of EventEmitter
    var self = this;
    // call the EventEmitter constructor
    EventEmitter.call(this);
    // simulate async message delivery
    setTimeout(function() {
        self.emit('begin');
        self.emit('message','node.js');
        self.emit('message','express.js');
        self.emit('end',2);
    },3000);
};

util.inherits(Message, EventEmitter);  // inherit EventEmitter

module.exports = Message;