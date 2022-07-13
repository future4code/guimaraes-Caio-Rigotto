import app from "./app";
import express, { Response, Request } from "express";

import connection from "./connection";
import { CreateProduct, CreateUser, GetProductsByUserId, RegisterPurchase } from "./utils/functions";
import { prod, purchase, user } from "./utils/types";

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
app.get('/users', async (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const users = await connection('labecommerce_users')
            .select()

        res.status(200).send(users)
    } catch (err: any) {
        res.status(errorCode).end(err.message)
    }
})

// GET ALL PRODUCTS
app.get('/products', async (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const products = await connection('labecommerce_products')
            .select()

        res.status(200).send(products)
    } catch (err: any) {
        res.status(errorCode).end(err.message)
    }
})

// GET PURCHASES BY USER ID
app.get('/users/:user_id/purchases', async (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const userId = Number(req.params.user_id)

        const purchases = await GetProductsByUserId(userId)

        res.status(200).send(purchases)
    } catch (err: any) {
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

// CREATE PRODUCT
app.post('/products', async (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const { name, price, img_url } = req.body
        if (!name || !price || !img_url) {
            errorCode = 400
            throw new Error("Parâmetro necessário não enviado!")
        }
        if (name === "" || price === "" || img_url === "") {
            errorCode = 400
            throw new Error("Parâmetros não podem estar vazios.")
        }

        const prod: prod = {
            name,
            price,
            img_url
        }
        await CreateProduct(prod)

        res.status(200).send("Produto criado.")
    }
    catch (err: any) {
        res.status(errorCode).end(err.message)
    }
})

// REGISTER PURCHASE
app.post('/purchases', async (req: Request, res: Response) => {
    let errorCode = 500
    try {
        const { userId, prodId, quantity } = req.body
        if (!userId || !prodId || !quantity) {
            errorCode = 400
            throw new Error("Parâmetro necessário não enviado!")
        }
        if (userId === "" || prodId === "" || quantity === "" || quantity === "0") {
            errorCode = 400
            throw new Error("Parâmetros não podem estar vazios.")
        }

        const checkUserId = await connection('labecommerce_users')
            .select()
            .where({ id: userId })

        const check = Object(checkUserId[0])

        if (Object.entries(check).length === 0) {
            errorCode = 400
            throw new Error("Id de usuário não consta no sistema.")
        }
        const checkProdId = await connection('labecommerce_products')
            .select()
            .where({ id: prodId })

        const checkProd = Object(checkProdId[0])

        if (Object.entries(checkProd).length === 0) {
            errorCode = 400
            throw new Error("Id de produto não consta no sistema.")
        }
        const purchase: purchase = {
            userId,
            prodId,
            quantity
        }

        await RegisterPurchase(purchase)

        res.status(200).send(`Compra registrada no sistema.`)
    }
    catch (err: any) {
        res.status(errorCode).end(err.message)
    }
})