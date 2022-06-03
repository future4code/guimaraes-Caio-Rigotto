import express from "express";
import { Request, Response } from "express";
import cors from "cors";

import { AddressInfo } from "net";
import { toDo } from "./data";

const app = express();
app.use(express.json());
app.use(cors())

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send("Pong!")
})

// Criar ToDo
app.post('/todo/create', (req: Request, res: Response) => {
    try {
        const userId = Number(req.headers.userid);
        const user = toDo.find((user) => user.userId === userId);

        if (!user) throw new Error("Id de usuário não encontrado!");

        const { title, completed } = req.body
        const newId = toDo.length + 1

        const newToDo = {
            userId,
            id: newId,
            title,
            completed
        }

        toDo.push(newToDo)

        res.status(200).send(toDo)
    }
    catch (err: any) {
        res.status(400).end(err.message)
    }
})

// Deletar ToDo
app.delete('/todo/:todoid/delete', (req: Request, res: Response) => {
    try {
        const toDoId = Number(req.params.todoid)

        const id = toDo.find((user) => user.id === toDoId);

        if (!id) throw new Error("ID não encontrado!")

        toDo.splice((toDoId-1),1)

        res.send(toDo)
    }

    catch (err: any) {
        res.status(400).end(err.message)
    }
})

// Deletar ToDo's de Usuário Específico
app.delete('/users/:userid/delete', (req: Request, res: Response) => {
    try {
        const id = Number(req.params.userid);

        // const id = toDo.find((user) => user.userId === userId);

        toDo.forEach((todo,i)=>{
            if(todo.userId === id){
                toDo.splice(i, 1)
            }
        })

        if (!id) throw new Error("ID não encontrado!")

        res.send(toDo)
    }

    catch (err: any) {
        res.status(400).end(err.message)
    }
})

// Editar ToDo
app.put('/todo/:todoid/edit', (req: Request, res: Response) => {
    try {
        const toDoId = Number(req.params.todoid)

        const id = toDo.find((user) => user.id === toDoId);

        if (!id) throw new Error("ID não encontrado!")

        const completed = req.body.completed

        const editedToDo = {
            ...id,
            completed
        }

        res.send(editedToDo)
    }

    catch (err: any) {
        res.status(400).end(err.message)
    }
})

// Mostrar Completo/Incompleto
app.get('/todo/completed/:completed', (req: Request, res: Response) => {
    try {
        const param = req.params.completed

        const completedToDo = toDo.filter((toDo) => {
            switch (param) {
                case "true":
                case "yes":
                    return toDo.completed === true
                case "false":
                case "no":
                    return toDo.completed === false
                default:
                    throw new Error("Parâmetro enviado inválido!")
            }
        })
        res.status(200).send(completedToDo)
    }
    catch (err: any) {
        res.status(400).end(err.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;