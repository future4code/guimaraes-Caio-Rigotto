import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, UserInputDTO, UserLoginDTO, UserProfileByIdDTO, UserProfileDTO } from "../model/user";

export class UserController {
  private userBusiness: UserBusiness
  constructor() {
    this.userBusiness = new UserBusiness()
  }

  public signup = async (req: Request, res: Response) => {
    try {
      const input: UserInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }

      const token = await this.userBusiness.createUser(input)

      res.status(201).send({ message: "User created", token });
    } catch (error: any) {
      let message = error.message || error.sqlMessage
      res.status(error.statusCode || 400).send(message)
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const input: UserLoginDTO = {
        email: req.body.email,
        password: req.body.password
      }

      const token = await this.userBusiness.login(input)

      res.status(200).send({ message: "Login efetuado com sucesso", token })
    } catch (error: any) {
      let message = error.message || error.sqlMessage
      res.status(error.statusCode || 400).send(message)
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
      let message = error.message || error.sqlMessage
      res.status(error.statusCode || 400).send(message)
    }
  };
  public profileById = async (req: Request, res: Response) => {
    try {
      const input: UserProfileByIdDTO = {
        token: req.headers.authorization as string,
        id: req.params.id
      };

      const userProfileById = await this.userBusiness.profileById(input)

      res.status(200).send(userProfileById);
    } catch (error: any) {
      let message = error.message || error.sqlMessage
      res.status(error.statusCode || 400).send(message)
    }
  }
}
