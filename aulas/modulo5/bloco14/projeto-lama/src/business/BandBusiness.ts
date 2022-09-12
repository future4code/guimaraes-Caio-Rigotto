import { BandDatabase } from "../data/BandDatabase";
import { MissingParameters, Unauthorized } from "../error/BaseError";
import { Band, BandInputDTO } from "../model/Band";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class BandBusiness {

    async createBand(band: BandInputDTO) {
        try {
            const { name, genre, responsible, token } = band

            if (!name || !genre || !responsible || !token) {
                throw new MissingParameters()
            }

            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()

            const authenticator = new Authenticator();
            const userData = authenticator.getData(token)

            const bandDatabase = new BandDatabase()
            await bandDatabase.createBand(id, name, genre, userData.id)

        } catch (error: any) {
            throw new Error(error.message);
        }
    }

}