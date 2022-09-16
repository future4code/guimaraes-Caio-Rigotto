import { PkmDatabase } from "../data/PkmDatabase"

export class PkmBusiness {
    public getPkmByName = async (input: string) => {
        try {
            const name = input

            const pkmDatabase = new PkmDatabase()

            const pkmData = await pkmDatabase.getPkmByName(name)

            return pkmData
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}