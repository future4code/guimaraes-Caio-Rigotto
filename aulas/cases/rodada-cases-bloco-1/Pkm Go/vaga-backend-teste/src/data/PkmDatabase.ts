import { Basedatabase } from "./BaseDatabase";

export class PkmDatabase extends Basedatabase {
    private TABLE_NAME = 'Pkm_data'
    public getPkmByName = async (name: string) => {
        try {
            const pkmData = await PkmDatabase.connection(this.TABLE_NAME)
                .select('*')
                .where('name', 'like', `%${name}%`)

            return pkmData
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getPkmByType = async (type: string) => {
        try {
            const pkmData = await PkmDatabase.connection(this.TABLE_NAME)
                .select('*')
                .where('type_1', 'like', `%${type}%`)
                .orWhere('type_2', 'like', `%${type}%`)

            return pkmData
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}