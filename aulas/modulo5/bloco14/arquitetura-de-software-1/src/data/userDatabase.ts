import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/user";


export class userDataBase extends BaseDatabase{
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
      } catch (error:any) {
         throw new Error(error.message)
      }
   }
}