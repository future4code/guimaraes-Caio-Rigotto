import { Request, Response } from "express";
import { postBusiness } from "../business/PostBusiness";

export class postController {
    async create(req: Request, res: Response) {
        try {
            let message = "Success!"

            const input = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                authorId: req.body.authorId
            }

            const PostBusiness = new postBusiness()

            await PostBusiness.create(input)

            res.status(201).send({ message })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })
        }
    }
    async getAll(req: Request, res: Response) {
        try {
            let message = "Success!"
      
            const id  = req.params.id

            const PostBusiness = new postBusiness()
            const post = await PostBusiness.getPostById(id)           
      
            res.status(200).send({ message, post })
      
         } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.statusCode = 400
            res.send({ message })
         }
    }
}
