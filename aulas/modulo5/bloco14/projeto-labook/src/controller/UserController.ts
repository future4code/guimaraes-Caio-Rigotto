import { Request, Response } from "express"
import { userBusiness } from "../business/UserBusiness"

export class userController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            let message = "Success!"

            const input = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const UserBusiness = new userBusiness()
            await UserBusiness.create(input);

            res.status(201).send({ message })

        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.statusCode || 400).send(message)
        }
    }

    async getUserPosts(req: Request, res: Response) {
        try {
            const id = req.params.id

            const UserBusiness = new userBusiness()
            const post = await UserBusiness.getUserPosts(id)

            res.status(200).send(post)
        } catch (error: any) {
            let message = error.sqlMessage || error.message
            res.status(error.statusCode || 400).send(message)
        }
    }
}
