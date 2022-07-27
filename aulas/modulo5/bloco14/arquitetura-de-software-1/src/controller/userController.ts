import { userBusiness } from '../business/userBusiness';
import { Request, Response } from 'express';

export class UserController {

    createUser = async (
        req: Request,
        res: Response): Promise<void> => {
        try {
            const input: any = {
                email: req.body.email,
                name: req.body.name,
                password: req.body.password
            }

            const UserBusiness = new userBusiness()
            await UserBusiness.createUser(input);

            res.status(201).send({ message: "Usuário criado!" });

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

} 