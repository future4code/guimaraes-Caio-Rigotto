import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { prod } from './data'
import { stringify, v4 as generateId } from 'uuid'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/test', (req:Request, res:Response)=>{
    try{
        res.status(200).send("Está tudo funcionando!")
    }
    catch(err:any){
        res.status(400).end("Deu algo de errado!")
    }
})

app.get('/products', (req: Request, res: Response)=>{
    try{
        res.status(200).send(prod)
    }
    catch(err:any){
        res.status(400).end("Ocorreu algo de errado!")
    }
})

app.post('/products/create',(req:Request, res:Response)=>{
    try{
        const prodName = req.body.name
        const prodPrice = req.body.price

        if(!prodName || !prodPrice){
        throw new Error("Parâmetro inválido ou faltando!")
        }

        const newProd = {
            id: String(prod.length +1),
            name: prodName,
            price: prodPrice
        }
        prod.push(newProd)
        res.status(200).send(prod)
    }
    catch(err:any){
        res.status(400).end(err.message)
    }
})

app.put('/products/edit', (req:Request, res: Response)=>{
    try{
        const prodId = req.body.id
        const newPrice = Number(req.body.price)

        for(const obj of prod){
            if(obj.id === prodId){
                obj.price = newPrice
            }
        }
        
        res.send(prod)
    }
    catch(err:any){
        res.status(400).end("Deu algo de errado!")
    }
})

app.delete('/products/delete', (req:Request, res:Response)=>{
    try{
        const prodId = req.body.id

        if(!prodId){
            throw new Error("Id não encontrado!")
        }

        prod.forEach((produ, i)=>{
            if(produ.id === prodId){
                prod.splice(i, 1)
            }
        })

        res.status(200).send(prod)
    }
    catch(err:any){
        res.status(400).end(err.message)
    }
})

app.listen(3003, () => {
    console.log("Servidor de pé na porta 3003")
})