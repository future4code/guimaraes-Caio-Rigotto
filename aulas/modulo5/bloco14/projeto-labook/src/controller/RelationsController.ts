import { Request, Response } from "express";
import { RelationsBusiness } from "../business/RelationsBusiness";
import { RelationInputDTO } from "../model/Relation";

export class RelationsController {
    async createRelation(req: Request, res: Response) {
        try {
            let message = "Success!"
            const { senderId, receiverId } = req.body

            const input: RelationInputDTO = {
                senderId,
                receiverId
            }

            const relationsBusiness = new RelationsBusiness()
            await relationsBusiness.createRelation(input)

            res.status(201).send({ message })
        } catch (error:any) {
            let message = error.sqlMessage || error.message
            res.status(error.statusCode || 400).send(message)
        }
    }
    async deleteRelation(id:string) {
        try {
            
        } catch (error:any) {
            
        }
    }
}