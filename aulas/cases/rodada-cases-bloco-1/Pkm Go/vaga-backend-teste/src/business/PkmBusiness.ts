import { PkmDatabase } from "../data/PkmDatabase"
import { MissingParams, NameNotFound, TypeNotFound } from "../error/BaseError"

export class PkmBusiness {
    constructor(
        private pkmDatabase = new PkmDatabase()
    ) {
        pkmDatabase = this.pkmDatabase
    }

    public getPkmByName = async (input: string) => {
        try {
            const name = input

            if (!name) {
                throw new MissingParams()
            }

            const pkmData = await this.pkmDatabase.getPkmByName(name)

            if (pkmData.length === 0) {
                throw new NameNotFound()
            }

            return pkmData
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getPkmByType = async (input: string) => {
        try {
            const type = input

            if (!type) {
                throw new MissingParams()
            }

            const pkmData = await this.pkmDatabase.getPkmByType(type)

            if (pkmData.length === 0) {
                throw new TypeNotFound()
            }

            return pkmData
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}