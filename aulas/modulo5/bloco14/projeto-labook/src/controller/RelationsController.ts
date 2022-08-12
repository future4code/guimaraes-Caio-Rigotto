import { Request, Response } from "express";
import { RelationsBusiness } from "../business/RelationsBusiness";
import { RelationInputDTO } from "../model/Relation";

export class RelationsController {
    async createRelation(req: Request, res: Response) {
        try {
            const input: RelationInputDTO = {
                senderId: req.body.senderId,
                receiverId: req.body.receiverId
            }

            const relationsBusiness = new RelationsBusiness()
            await relationsBusiness.createRelation(input)

            res.status(201).send("Friendship made!")
        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.statusCode || 400).send(message)
        }
    }
    async deleteRelation(req: Request, res: Response) {
        try {
            const input:RelationInputDTO = {
                senderId : req.body.userId,
                receiverId: req.body.friendId
            }

            const relationsBusiness = new RelationsBusiness()
            await relationsBusiness.deleteRelation(input)

            res.status(201).send("Friendship deleted!")

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.statusCode || 400).send(message)
        }
    }
}