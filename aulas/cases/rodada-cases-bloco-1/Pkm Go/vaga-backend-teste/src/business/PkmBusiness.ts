import { PkmDatabase } from "../data/PkmDatabase"
import { MissingParams, NameNotFound } from "../error/BaseError"

export class PkmBusiness {
    public getPkmByName = async (input: string) => {
        try {
            const name = input

            if (!name) {
                throw new MissingParams()
            }

            const pkmDatabase = new PkmDatabase()

            const pkmData = await pkmDatabase.getPkmByName(name)

            if (pkmData.length === 0) {
                throw new NameNotFound()
            }

            return pkmData
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}