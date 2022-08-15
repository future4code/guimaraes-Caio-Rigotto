import { userDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { generateId } from "../services/GenerateId";

export class userBusiness {
    async create(input: any) {
        try {
            const { name, email, password } = input

            const id: string = generateId()

            if (!name || !email || !password) {
                throw new InvalidRequest()
            }

            const newUser = {
                id,
                name,
                email,
                password
            }

            const UserDatabase = new userDatabase()
            await UserDatabase.insert(newUser)
            
        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }
    
    async getUserFriends(id: string) {
        try {
            if (!id) {
                throw new InvalidRequest()
            }

            const UserDatabase = new userDatabase()
            const timelineIds = await UserDatabase.getUserFriends(id)

            const timelinePosts = await UserDatabase.getUserTimeline(timelineIds)
            
            return timelinePosts

        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }
}