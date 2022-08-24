import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, UserInputDTO, UserLoginDTO, UserProfileDTO } from "../model/user";

export class UserController {
  private userBusiness: UserBusiness
  constructor() {
    this.userBusiness = new UserBusiness()
  }

  public signup = async (req: Request, res: Response) => {
    try {

      const input: UserInputDTO = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        nickname: req.body.nickname,
        role: req.body.role
      }

      const token = await this.userBusiness.createUser(input)

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const input: UserLoginDTO = {
        email: req.body.email,
        password: req.body.password
      }

      const token = await this.userBusiness.login(input)

      res.status(200).send({message: "Login efetuado com sucesso", token})
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public profile = async (req: Request, res: Response) => {
    try {
      const token: UserProfileDTO = {
        token: req.headers.authorization as string
      };

      const userProfile = await this.userBusiness.profile(token);

      res.status(200).send(userProfile);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
