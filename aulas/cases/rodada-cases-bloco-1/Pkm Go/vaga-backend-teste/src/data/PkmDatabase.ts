import { Basedatabase } from "./BaseDatabase";

export class PkmDatabase extends Basedatabase {
    private TABLE_NAME = 'Pkm_data'
    async getPkmByName(name: string) {
        try {
            const pkmData = await PkmDatabase.connection(this.TABLE_NAME)
            .select('*')
            .where({name})

            return pkmData
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}