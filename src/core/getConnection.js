module.exports = store => () => {
    try {
        const {connection} = store

        return connection
    } catch (e) {
        console.error(e)

        throw e
    }
}
