import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/user";


export class userDataBase extends BaseDatabase {
    insertUser = async (
        user: user
    ) => {
        try {
            await userDataBase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into('User_Arq')
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
    get = async (): Promise<user[]> => {
        try {
            const users: user[] = [];

            const result = await userDataBase.connection()
                .select("*")
                .from('User_Arq');

            for (let user of result) {
                users.push(user);
            }

            return users;

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}