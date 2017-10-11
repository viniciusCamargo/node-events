const ch = require('./index')
const { hello } = require('./events')

ch.emit(hello, { hello: 'world' })
