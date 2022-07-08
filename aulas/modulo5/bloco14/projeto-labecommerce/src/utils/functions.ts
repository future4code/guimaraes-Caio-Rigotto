import connection from "../connection"
import { user } from "./types"

export const CreateUser = async (user: user) => {

    await connection('labecommerce_users')
        .insert({
            name: user.name,
            email: user.email,
            password: user.password
        })
}