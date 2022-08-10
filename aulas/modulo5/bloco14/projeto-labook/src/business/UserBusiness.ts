import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { generateId } from "../services/GenerateId";

export class userBusiness {
    async create(input: any) {
        const {name, email, password} = input

        const id: string = generateId()

        if (!name || !email || !password) {
            throw new CustomError('"name", "email" and "password" must be provided', 406)
        }

        const userDatabase = new UserDatabase()
        await userDatabase.create({id, name, email, password})
    }
}