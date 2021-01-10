const EventEmitter = require('events').EventEmitter

class NodeEvent extends EventEmitter {
    constructor() {
        super()
        setInterval(() => {
            this.emit('newPrice', { price: (Math.random() * 100).toFixed() })
        }, 3000);
    }
}

const nodeEvent = new NodeEvent

module.exports = nodeEvent



// return base