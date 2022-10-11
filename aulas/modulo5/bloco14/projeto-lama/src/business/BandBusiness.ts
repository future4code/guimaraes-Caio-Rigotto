import { BandDatabase } from "../data/BandDatabase";
import { InformationNotFound, MissingParameters, Unauthorized } from "../error/BaseError";
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

    async getBandInfo(input: any): Promise<Band> {
        try {
            const { id, name } = input

            if (!id && !name) {
                throw new MissingParameters()
            }
            const bandDatabase = new BandDatabase()

            let result
            if (id && !name) {
                result = await bandDatabase.getBandById(id)
            }

            if (!id && name) {
                result = await bandDatabase.getBandByName(name)
            }

            if(!result){
                throw new InformationNotFound()
            }

            const bandInfo = Band.toBandModel(result)

            return bandInfo
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

}