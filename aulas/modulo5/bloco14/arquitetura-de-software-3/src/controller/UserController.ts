import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CreateUserDTO } from "../model/UserDTO";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, password } = req.body;

      const input: CreateUserDTO = {
        email,
        name,
        password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
  async get(req: Request, res: Response): Promise<void> {
    try {
      const users = await new UserBusiness().get();

      res.send(users).status(200)
    } catch (error: any) {
      res.send({ message: error.message }).status(error.status)
    }
  }
}
