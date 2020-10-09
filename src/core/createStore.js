const getModel = require('../core/getModel')
const getConnection = require('../core/getConnection')


const _validateOpts = (opts) => {
    return Object.assign({}, opts)
}


module.exports = (opts) => {
    const args = _validateOpts(opts)

    return {
        getModel: getModel(args),
        getConnection: getConnection(args),
    }
}

