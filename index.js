const EventEmitter = require('events')
const Events = new EventEmitter()

const handle = require('./handlers')
const { hello } = require('./events')

Events.on(hello, handle.hello)

module.exports = Events
