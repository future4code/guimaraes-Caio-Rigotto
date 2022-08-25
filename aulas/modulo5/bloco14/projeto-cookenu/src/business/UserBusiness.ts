import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, InvalidPasswordEmail, InvalidToken, MissingInformation } from "../error/customError";
import { AuthenticationData } from "../model/types";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  UserLoginDTO,
  UserProfileDTO,
  UserProfileOutputDTO,
  UserProfileByIdDTO,
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
      let { email, password, name } = input

      if (!email || !password || !name) {
        throw new CustomError(422, "Ausência de parâmetros")
      }

      const id = IdGenerator.generateId()
      const hash = await HashManager.generateHash(password)

      const user: user = {
        id,
        email,
        password: hash,
        name
      }

      await this.userDB.insertUser(user)
      const token = Authenticator.generateToken({ id })

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public login = async (input: UserLoginDTO) => {
    try {
      const { email, password } = input

      if (!email || !password) {
        throw new MissingInformation()
      }

      const user = await this.userDB.getUserByEmail(email)

      if (!user) {
        throw new InvalidPasswordEmail()
      }

      const hashCompare = await HashManager.compareHash(
        password,
        user.password
      )

      if (!hashCompare) {
        throw new InvalidPassword()
      }

      const payload: AuthenticationData = {
        id: user.id,
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

      const authenticationData: AuthenticationData = Authenticator.getTokenData(token)

      const userData = await this.userDB.getUserById(authenticationData)

      if (!userData) {
        throw new InvalidToken()
      }

      const userProfile: UserProfileOutputDTO = {
        id: userData.id,
        name: userData.name,
        email: userData.email
      }

      return userProfile

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  public profileById = async (input: UserProfileByIdDTO) => {
    try {
      const { token } = input

      const id: AuthenticationData = {
        id: input.id
      }

      const authenticationData = Authenticator.getTokenData(token)

      if (!authenticationData) {
        throw new InvalidToken()
      }

      const userData = await this.userDB.getUserById(id)

      const userProfile: UserProfileOutputDTO = {
        id: userData.id,
        name: userData.name,
        email: userData.email
      }

      return userProfile

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}
