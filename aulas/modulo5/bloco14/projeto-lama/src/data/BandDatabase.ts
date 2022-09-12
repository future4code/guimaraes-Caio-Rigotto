import { BaseDatabase } from "./BaseDatabase";

export class BandDatabase extends BaseDatabase {

    private static TABLE_NAME = "Lama_Bands";
  
    public async createBand(
      id: string,
      name:string,
      genre: string,
      responsible:string,
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
  
  }
  