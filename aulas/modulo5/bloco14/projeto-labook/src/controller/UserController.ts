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
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send(message)
        }
    }
}
