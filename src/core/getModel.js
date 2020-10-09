const path = require('path')


module.exports = store => (modelName = '') => {
    const name = (modelName || '').trim()

    if (!name) {
        throw new Error('Model name is required.')
    }

    const {connection, schemas} = store

    const pathModel = path.join(schemas, name)
    const Model = require(pathModel)

    return connection.model(name, Model)
}

