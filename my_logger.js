const EventEmitter = require('events');
const uuid = require('uuid');

class MyLogger extends EventEmitter {
    constructor() {
        super();

        // Info level
        this.on("info", msg => {
            console.log(`${uuid.v4()} INFO - ${msg}`);
        });

        // Warn level
        this.on("warn", msg => {
            console.log(`${uuid.v4()} WARN - ${msg}`);
        });

        // ...
    }
}

const logger = new MyLogger();
logger.emit("info", "Hello World!");
logger.emit("warn", "Hello World!");