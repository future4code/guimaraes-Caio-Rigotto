import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";
import { AuthenticationData } from "../model/types";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  UserLoginDTO,
  UserProfileDTO,
} from "../model/user";
import Authenticator from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

export class UserBusiness {
  private userDB: UserDatabase
  constructor() {
    this.userDB = new UserDatabase()
  }

  public createUser = async (input: UserInputDTO) => {
    try {
      let { email, password, name, nickname, role } = input

      if (!email || !password || !name || !nickname || !role) {
        throw new CustomError(422, "Ausência de parâmetros")
      }

      if (role !== 'NORMAL' && role !== 'ADMIN') {
        role = 'NORMAL'
      }

      const id = IdGenerator.generateId()
      const hash = await HashManager.generateHash(password)

      const user: user = {
        id,
        email,
        password: hash,
        name,
        nickname,
        role
      }

      await this.userDB.insertUser(user)
      const token = Authenticator.generateToken({ id, role })

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: UserLoginDTO) => {
    try {
      const { email, password } = input

      if (!email || !password) {
        throw new CustomError(400, "Ausência de parâmetros")
      }

      const user = await this.userDB.getUserByEmail(email)
      const hashCompare = await HashManager.compareHash(
        password,
        user.password
      )

      if (!hashCompare) {
        throw new InvalidPassword()
      }

      const payload: AuthenticationData = {
        id: user.id,
        role: user.role
      }
      const token = Authenticator.generateToken(payload)

      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }

  public profile = async (input: UserProfileDTO) => {
    try {
      const { token } = input

      const authenticationData = Authenticator.getTokenData(token)

      console.log(authenticationData)

      if(authenticationData.role !== "NORMAL"){
        throw new CustomError(401, "Apenas um usuário de tipo 'NORMAL' pode acessar esta informação")
      }

      const userData = this.userDB.getUserById(authenticationData)

      if (!userData) {
        throw new CustomError(400, "Usuário não encontrado")
      }

      return userData

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
