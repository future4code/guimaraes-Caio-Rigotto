import { CustomError } from "../error/CustomError";
import { UserInputDTO } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class userDatabase extends BaseDatabase {
    private tableName = "labook_users";

    async insert(input: UserInputDTO) {
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