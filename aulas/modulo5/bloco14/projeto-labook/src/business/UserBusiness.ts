import { userDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { generateId } from "../services/GenerateId";

export class userBusiness {
    async create(input: any) {
        try {
            const { name, email, password } = input

            const id: string = generateId()

            if (!name || !email || !password) {
                throw new CustomError('"name", "email" and "password" must be provided', 406)
            }

            const newUser = {
                id,
                name,
                email,
                password
            }

            const UserDatabase = new userDatabase()
            await UserDatabase.insert(newUser)
            
        } catch (error) {
            throw new CustomError('Something went wrong', 500)
        }
    }
}