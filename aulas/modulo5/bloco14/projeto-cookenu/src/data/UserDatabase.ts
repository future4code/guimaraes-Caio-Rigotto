import { CustomError } from "../error/customError";
import { AuthenticationData } from "../model/types";
import { EditUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  TABLE_NAME = "Cookenu_users"

  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password
        })
        .into(this.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };

  public getUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection(this.TABLE_NAME)
        .select()
        .where({ email })

      return result[0]
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };

  public editUser = async (user: EditUserInput) => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, nickname: user.nickname })
        .where({ id: user.id })
        .into(this.TABLE_NAME);
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };

  public getUserById = async (authenticationData: AuthenticationData) => {
    try {
      const result = await UserDatabase.connection(this.TABLE_NAME)
        .select()
        .where({ id: authenticationData.id })

      return result[0]
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };
}
