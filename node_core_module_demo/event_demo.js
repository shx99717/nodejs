const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('dummyEvent', () => console.log('Dummy Event fired!'));


myEmitter.emit('dummyEvent');
myEmitter.emit('dummyEvent');
myEmitter.emit('dummyEvent');