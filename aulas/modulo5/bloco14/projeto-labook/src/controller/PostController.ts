import { Request, Response } from "express";
import { postBusiness } from "../business/PostBusiness";
import { CreatePostDTO } from "../model/PostDTO";

export class postController {
    async createPost(req: Request, res: Response) {
        try {
            let message = "Success!"

            const input:CreatePostDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                authorId: req.body.authorId
            }

            const PostBusiness = new postBusiness()

            await PostBusiness.createPost(input)

            res.status(201).send({ message })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.statusCode || 400).send(message)
        }
    }
    async getPostById(req: Request, res: Response) {
        try {
            let message = "Success!"
      
            const id  = req.params.id

            const PostBusiness = new postBusiness()
            const post = await PostBusiness.getPostById(id)           
      
            res.status(200).send({ message, post })
      
         } catch (error: any) {
            let message = error.message || error.sqlMessage
            res.status(error.statusCode || 400).send(message)
         }
    }
}
