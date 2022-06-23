import app from "./app";
import express, { Response, Request } from "express";

import { CreateUser, EditUser } from "./utils/functions"
import connection from "./connection";

app.get('/ping', (req: Request, res: Response) => {
    try {
        res.status(200).send("Pong")
    }
    catch (err) {
        res.status(500).end("Ocorreu algo de errado.")
    }
})

app.post('/user', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            ErrorCode = 400
            throw new Error("Parâmetro requerido não enviado.")
        }
        const checkDupicate = await connection('toDoListUser')
            .select()
            .where({
                nickname: nickname,
                email: email
            })

        const check = Object(checkDupicate[0])

        if (Object.entries(check).length > 1) {
            ErrorCode = 400
            throw new Error("Nickname ou email já consta no sistema.")
        }

        await CreateUser(name, nickname, email)

        res.status(200).send(`Usuário ${nickname} criado com sucesso.`)
    }
    catch (err: any) {
        res.status(ErrorCode).end(err.message)
    }
})

app.get('/user/:id', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const id = req.params.id

        if(!id){
            ErrorCode = 400
            throw new Error("Parâmetro id necessário não enviado.")
        }

        const users = await connection('toDoListUser')
            .select('id','nickname')
            .where({id:id})

        if(Object.entries(users).length === 0){
            ErrorCode = 422
            throw new Error("Id não encontrado na database.")
        }
        
        res.status(200).send(users)
    }
    catch (err:any) {
        res.status(ErrorCode).end(err.message)
    }
})

app.put('/user/edit/:id', async (req: Request, res: Response)=>{
    let ErrorCode = 500
    try{
        const id = Number(req.params.id)

        if(!id){
            ErrorCode = 400
            throw new Error("Parâmetro 'id' não enviado.")
        }

        const { name, nickname, email } = req.body
        
        if(name === "" || nickname === "" || email === ""){
            ErrorCode = 400
            throw new Error("Parâmetros enviados no body não podem ser vazios.")
        }

        await EditUser(id, name, nickname, email)        
        res.status(200).send(`Usuário de id:${id} editado com sucesso.`)
    }
    catch(err:any){
        res.status(ErrorCode).end(err.message)
    }
})