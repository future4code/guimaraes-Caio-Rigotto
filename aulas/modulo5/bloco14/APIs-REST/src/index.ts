import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { users, USERS } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/users/list', (req: Request, res: Response) => {
    let errorCode = 500

    if (!users) {
        errorCode = 400
        throw new Error(`Houve algo de errado! Erro: ${errorCode}`)
    }

    try {
        res.status(200).send(users)
    }
    catch (err: any) {
        res.status(400).end(err.message)
    }
})

app.get('/users', (req: Request, res: Response) => {
    let errorCode = 500

    const queryType = req.query.type as string

    try {
        if (!queryType) {
            errorCode = 422
            throw new Error('Parâmetro "type" não enviado.')
        }
        const typeFound = users.filter((user) => {
            if (user.type.toLowerCase() === queryType.toLowerCase()) {
                return user
            }
        })
        if (!typeFound.length) {
            errorCode = 400
            throw new Error('Parâmetro enviado inválido.')
        }

        res.status(200).send(typeFound)
    }
    catch (err: any) {
        res.status(errorCode).end(err.message)
    }
})

app.get('/user', (req: Request, res: Response) => {
    let errorCode = 500

    try {
        const queryName = req.query.name as string

        if (!queryName) {
            errorCode = 422
            throw new Error('Parâmetro "name" não enviado.')
        }
        const nameFound = users.filter((user) => {
            if (user.name.toLowerCase() === queryName.toLowerCase()) {
                return user
            }
        })
        if (!nameFound.length) {
            errorCode = 400
            throw new Error('Nome não encontrado.')
        }

        res.status(200).send(nameFound)
    }
    catch (err: any) {
        res.status(errorCode).end(err.message)
    }
})

app.post('/users/add', (req: Request, res: Response) => {
    let errorCode = 500

    try {
        const { name, email, type, age } = req.body

        if (type !== "admin" && type !== "normal") {
            errorCode = 422
            throw new Error('Parâmetro "type" deve ser admin ou normal.')
        }

        users.forEach((user) => {
            errorCode = 400
            if (user.email === email) {
                throw new Error("E-mail já cadastrado no sistema.")
            }
        });

        const newUser: USERS = {
            id: users.length + 1,
            name,
            email,
            type: type.toUpperCase(),
            age
        }

        users.push(newUser)

        res.status(200).send(users)
    }
    catch (err: any) {
        res.status(errorCode).end(err.message)
    }
})

app.put('/user/edit', (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const userId = Number(req.query.id)
        const newName = req.body.name as string

        if (!userId || !newName) {
            errorCode = 422
            throw new Error('Parâmetro não enviado.')
        }

        for (const user of users) {
            if (user.id === userId) {
                user.name = `${newName} - ALTERADO`
            }
        }

        res.status(200).send(users)
    }
    catch (err: any) {
        res.status(errorCode).end(err.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor de pé na porta 3003")
})