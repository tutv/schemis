import {Connection, Model} from "mongoose"

interface Options {
    connection: Connection,
    schemas: string,
}

interface Schemis {
    getModel(modelName: string, collectionName?: string): Model<any>,

    getConnection(): Connection,
}


interface CreateConnection {

}

export function createStore(opts: Options): Schemis

export function createConnection(URI: string, opts?: CreateConnection): Connection

