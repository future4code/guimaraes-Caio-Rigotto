import { Band } from "../model/Band";
import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {

  private static TABLE_NAME = "Lama_Bands";

  public async createBand(
    id: string,
    name: string,
    genre: string,
    responsible: string,
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          name,
          music_genre: genre,
          responsible
        })
        .into(BandDatabase.TABLE_NAME)
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandById(
    id: string
  ): Promise<Band> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(BandDatabase.TABLE_NAME)
        .where({ id })

      return result[0]
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getBandByName(
    name: string
  ): Promise<Band> {
    try {
      const result = await this.getConnection()
        .select('*')
        .from(BandDatabase.TABLE_NAME)
        .where({ name })

      return result[0]
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

}
