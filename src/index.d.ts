import {Connection, Model} from "mongoose"

interface Options {
    connection: Connection,
    schemas: String,
}

interface Schemis {
    getModel(modelName: String): Model<any>,

    getConnection(): Connection,
}


interface CreateConnection {

}

export function createStore(opts: Options): Schemis

export function createConnection(URI: String, opts?: CreateConnection): Connection

