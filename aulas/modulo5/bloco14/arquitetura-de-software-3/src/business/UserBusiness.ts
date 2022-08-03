import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { User } from "../model/User"
import { CreateUserDTO } from "../model/UserDTO"

export class UserBusiness {
  async create(input: CreateUserDTO): Promise<void> {

    const id = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      input
    })
  }
  async get ():Promise<User[]>{
    const UserDataBase = new UserDatabase()

    return await UserDataBase.get()
  }
}
