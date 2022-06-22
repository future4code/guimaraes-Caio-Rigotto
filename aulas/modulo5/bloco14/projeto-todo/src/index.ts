import app from "./app";
import express, { Response, Request } from "express";

import CreateUser from "./utils/functions"
import connection from "./connection";

app.get('/ping', (req:Request, res:Response)=>{
    try{
        res.status(200).send("Pong")
    }
    catch(err){
        res.status(500).end("Ocorreu algo de errado.")
    }
})

app.get('/users', async (req:Request, res:Response)=>{
    try{
        const users = await connection('toDoListUser')
        .select()
        res.status(200).send(users)
    }
    catch(err){
        res.status(500).end("Houve algo de errado.")
    }
})

app.post('/user', async (req:Request, res:Response)=>{
    let ErrorCode = 500
    try{
        console.log("Chegou até aqui")
        const { name, nickname, email } = req.body

        if(!name||!nickname||!email){
            ErrorCode = 400
            throw new Error("Parâmetro requerido não enviado.")
        }
        await CreateUser(name, nickname, email)

        res.status(200).send(`Usuário ${nickname} criado com sucesso.`)
    }
    catch(err:any){
        res.status(ErrorCode).end(err.message)
    }
})