import app from "./app";
import express, { Response, Request } from "express";

import connection from "./connection";
import { CreateUser } from "./utils/functions";
import { user } from "./utils/types";

// TEST CONNECTION
app.get('/ping', (req: Request, res: Response) => {
    try {
        res.status(200).send("Pong")
    }
    catch (err) {
        res.status(500).end("Ocorreu algo de errado.")
    }
})

// GET ALL USERS
app.get('/users', async (req: Request, res: Response)=>{
    let errorCode = 500
    try {
        const users = await connection('labecommerce_users')
        .select()

        res.status(200).send(users)
    } catch (err:any) {
        res.status(errorCode).end(err.message)
    }
})

// CREATE USER
app.post('/users', async (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            errorCode = 400
            throw new Error("Parâmetro necessário não enviado!")
        }
        if (name === "" || email === "" || password === "") {
            errorCode = 400
            throw new Error("Parâmetros não podem estar vazios.")
        }

        const checkDuplicate = await connection('labecommerce_users')
            .select()
            .where({ email: email })

        const check = Object(checkDuplicate[0])

        if (Object.entries(check).length > 1) {
            errorCode = 400
            throw new Error("Email já consta no sistema.")
        }

        const user: user = {
            name,
            email,
            password
        }
        await CreateUser(user)

        res.status(200).send("Usuário criado com sucesso!")
    }
    catch (err: any) {
        res.status(errorCode).end(err.message || "Deu algo de errado.")
    }
})