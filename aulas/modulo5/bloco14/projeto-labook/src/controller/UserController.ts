import { Request, Response } from "express"
import { userBusiness } from "../business/UserBusiness"
import { CreateUserDTO } from "../model/UserDTO"
import { generateId } from "../services/GenerateId"

export class userController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            let message = "Success!"
            const { name, email, password } = req.body

            const input = {
                name, email, password
            }

            const UserBusiness = new userBusiness()
            await UserBusiness.create(input);

            res.status(201).send({ message })

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
}
