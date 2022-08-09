import { Request, Response } from "express"
import { app } from "../app"
import { userBusiness } from "../business/UserBusiness"
import { CustomError } from "../error/CustomError"
import { CreateUserDTO } from "../model/UserDTO"
import { generateId } from "../services/GenerateId"

export class userController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            let message = "Success!"
            const { name, email, password } = req.body

            const id: string = generateId()

            const input: CreateUserDTO = {
                id, name, email, password
            }

            const UserBusiness = new userBusiness()
            UserBusiness.create(input)

            res.status(201).send({ message })

        } catch (error: any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
            res.send({ message })
        }
    }
}
