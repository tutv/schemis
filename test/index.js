const {createStore, createConnection} = require('../index')
const path = require('path')


const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/test'
const connection = createConnection(uri)

setImmediate(async () => {
    try {
        const schemas = path.join(__dirname, 'schemas')
        const Store = createStore({connection, schemas})
        const Product = Store.getModel('Post')

        const product = new Product({
            title: "Hello world",
            rank: 1
        })

        const doc = await product.save()
        console.log('DOC', doc.toJSON())
    } catch (error) {
        console.log('ERROR', error.message)
    }
})




