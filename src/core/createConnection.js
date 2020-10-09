const Monoose = require('mongoose')


module.exports = (uri, options) => {
    const vUri = uri ? uri.trim() : ''
    if (!vUri) {
        throw new Error('URI is required.')
    }

    const defaultOpts = {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    const vOptions = Object.assign({}, defaultOpts, options)

    const connection = Monoose.createConnection(uri, vOptions)

    connection.on('connected', () => {
        console.log('MongoDB is connected.')
    })

    connection.on('connecting', () => {
        console.log('MongoDB is connecting.')
    })

    connection.on('reconnected', () => {
        console.log('MongoDB is reconnected.')
    })

    return connection
}

