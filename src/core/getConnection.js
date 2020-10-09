const _validateArgs = require('./_validateArgs')


module.exports = store => (collection, options = {}) => {
    const {plugin} = _validateArgs(options)

    try {


    } catch (e) {
        console.error(e)

        process.exit(1)
    }
}

