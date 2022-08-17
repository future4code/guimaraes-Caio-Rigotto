import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, UserInputDTO, LoginInputDTO, ProfileInputDTO } from "../model/user";

export class UserController {

  public signUp = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        nickname,
        email,
        password,
      };
      const userBusiness = new UserBusiness()

      const token = await userBusiness.signUp(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: LoginInputDTO = {
        email,
        password,
      };
      const userBusiness = new UserBusiness()

      const token = await userBusiness.login(input);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public userProfile = async (req: Request, res: Response) => {
    try {
      const token: ProfileInputDTO = {
        token: req.headers.authorization as string
      };

      const userBusiness = new UserBusiness()
      const userProfile = await userBusiness.userProfile(token);

      res.status(200).send(userProfile);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public editUser = async (req: Request, res: Response) => {
    try {

      const input: EditUserInputDTO = {
        name: req.body.name,
        nickname: req.body.nickname,
        id: req.params.id
      };

      const userBusiness = new UserBusiness()
      userBusiness.editUser(input);

      res.status(201).send({ message: "Usuário alterado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
