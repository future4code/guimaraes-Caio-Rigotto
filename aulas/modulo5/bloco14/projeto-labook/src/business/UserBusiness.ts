import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { CreateUserDTO } from "../model/UserDTO";


export class userBusiness {
    async create(input:CreateUserDTO) {
        if (!input.name || !input.email || !input.password) {
            throw new CustomError('"name", "email" and "password" must be provided',406)
        }
    const userDatabase = new UserDatabase()
    await userDatabase.create(input)
    }
}