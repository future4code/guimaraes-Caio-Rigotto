import { CustomError } from "../error/CustomError";
import { CreateUserDTO } from "../model/UserDTO";
import { BaseDatabase } from "./BaseDatabase";

export class userDatabase extends BaseDatabase {
    private tableName = "labook_users";

    async insert(input: CreateUserDTO) {
        try {
            await BaseDatabase.connection(this.tableName)
                .insert({
                    id: input.id,
                    name: input.name,
                    email: input.email,
                    password: input.password
                })
        } catch (error) {
            throw new CustomError('Something is wrong', 500)
        }
    }
}