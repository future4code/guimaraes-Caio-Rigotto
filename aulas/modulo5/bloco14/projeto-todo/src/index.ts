import app from "./app";
import express, { Response, Request } from "express";

import { CreateTask, CreateUser, EditUser, GetAllUsers, GetTaskById, GetTaskByUserId, SearchForUser, AssignUserTask } from "./utils/functions"
import connection from "./connection";

// TEST CONNECTION
app.get('/ping', (req: Request, res: Response) => {
    try {
        res.status(200).send("Pong")
    }
    catch (err) {
        res.status(500).end("Ocorreu algo de errado.")
    }
})

// CREATE USER
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

// GET ALL USERS
app.get('/user/all', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const userList = await GetAllUsers()

        res.status(200).send(userList)
    }
    catch (err: any) {
        res.status(ErrorCode).end(err.message)
    }
})

// GET USER BY ID
app.get('/user/:id', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const id = req.params.id

        if (!id) {
            ErrorCode = 400
            throw new Error("Parâmetro id necessário não enviado.")
        }

        const users = await connection('toDoListUser')
            .select('id', 'nickname')
            .where({ id: id })

        if (Object.entries(users).length === 0) {
            ErrorCode = 422
            throw new Error("Id não encontrado na database.")
        }

        res.status(200).send(users)
    }
    catch (err: any) {
        res.status(ErrorCode).end(err.message)
    }
})

// EDIT USER BY ID
app.put('/user/edit/:id', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const id = Number(req.params.id)

        if (!id) {
            ErrorCode = 400
            throw new Error("Parâmetro 'id' não enviado.")
        }

        const { name, nickname, email } = req.body

        if (name === "" || nickname === "" || email === "") {
            ErrorCode = 400
            throw new Error("Parâmetros enviados no body não podem ser vazios.")
        }

        await EditUser(id, name, nickname, email)
        res.status(200).send(`Usuário de id:${id} editado com sucesso.`)
    }
    catch (err: any) {
        res.status(ErrorCode).end(err.message)
    }
})

// CREATE TODO TASK
app.post('/task', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const { task, desc, status, limitDate, creatorId } = req.body
        if (!task || !desc || !status || !limitDate || !creatorId) {
            ErrorCode = 400
            throw new Error("Parâmetro necessário não enviado.")
        }
        if (task === "" || desc === "" || limitDate === "" || creatorId === "") {
            ErrorCode = 400
            throw new Error("Parâmetros enviados no body não podem ser vazios")
        }

        const date_regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        if (!(date_regex.test(limitDate))) {
            ErrorCode = 422
            throw new Error("Formato de data errado. DD/MM/YYYY")
        }

        const checkUserId = await connection('toDoListUser')
            .select()
            .where({ id: creatorId })
        if (Object.entries(checkUserId).length === 0) {
            ErrorCode = 422
            throw new Error("Id do criador não encontrado na database.")
        }

        await CreateTask(task, desc, status, limitDate, creatorId)

        res.status(200).send("Tarefa criada com sucesso.")
    }
    catch (err: any) {
        res.status(ErrorCode).end(err.message)
    }
})

// GET TODO TASK BY ID
app.get('/task/:id', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const id = Number(req.params.id)

        if (!id) {
            ErrorCode = 400
            throw new Error("Parâmetro necessário não enviado.")
        }

        const tasks = await GetTaskById(id)

        if (!tasks) {
            ErrorCode = 422
            throw new Error("Id de tarefa não encontrado na database.")
        }

        res.status(200).send(tasks)
    }
    catch (err: any) {
        res.status(ErrorCode).end(err.message)
    }
})

// GET TODO TASK BY CREATOR ID
app.get('/task', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const creatorId = Number(req.query.creatorUserId)

        if (!creatorId) {
            ErrorCode = 400
            throw new Error("Parâmetro 'creatorUserId' não enviado.")
        }

        const tasks = await GetTaskByUserId(creatorId)

        res.status(200).send(tasks)
    }
    catch (err: any) {
        res.status(200).end(err.message)
    }
})

// SEARCH FOR USERS
app.get('/user', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const userQuery = req.query.user as string

        if (!userQuery) {
            ErrorCode = 400
            throw new Error("Parâmetro 'user' não enviado.")
        }

        const userResult = await SearchForUser(userQuery)

        res.status(200).send(userResult)
    }
    catch (err: any) {
        res.status(ErrorCode).end(err.message)
    }
})

// ASSIGN USER TASK
app.post('/task/responsible', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try {
        const { task_id, responsible_user_id } = req.body

        if (!task_id || !responsible_user_id || task_id === "" || responsible_user_id === "") {
            ErrorCode = 400
            throw new Error("Parâmetro necessário não enviado.")
        }

        const assignAllOk = await AssignUserTask(task_id, responsible_user_id)

        if (assignAllOk === false) {
            ErrorCode = 422
            throw new Error("Id de usuário ou id de tarefa enviado não consta na database.")
        }
        res.status(200).send(`Usuário de id: ${responsible_user_id} atribuído à tarefa de id: ${task_id}.`)
    }
    catch (err: any) {
        res.status(ErrorCode).end(err.message)
    }
})

// GET USER ASSIGNED TO TASK BY TASK ID
app.get('/task/:id/responsible', async (req: Request, res: Response) => {
    let ErrorCode = 500
    try{
        
    }
    catch(err:any){

    }
})