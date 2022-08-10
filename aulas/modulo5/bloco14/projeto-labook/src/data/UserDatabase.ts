import { CustomError } from "../error/CustomError";
import { CreateUserDTO } from "../model/UserDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    private static TABLE_NAME = "labook_users";

    async create(input: CreateUserDTO) {
        try {
            await UserDatabase.connection(`${UserDatabase.TABLE_NAME}`)
                .insert({
                    id: input.id,
                    name: input.name,
                    email: input.email,
                    password: input.password
                })
        } catch (error) {
            throw new CustomError('Something is wrong',500)
        }
    }
}