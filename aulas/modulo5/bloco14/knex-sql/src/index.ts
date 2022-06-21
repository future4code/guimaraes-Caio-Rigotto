import connection from "./connection";
import app from "./app";
import { Response, Request } from "express";

const GetActorById = async (id:string):Promise<any> =>{
    const result = await connection.raw(`
        SELECT * FROM actor WHERE id = '${id}'
    `)
    return result[0][0]
}
