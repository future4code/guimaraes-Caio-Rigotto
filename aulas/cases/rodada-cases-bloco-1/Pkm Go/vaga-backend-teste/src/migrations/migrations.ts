import { Basedatabase } from "../data/BaseDatabase";
import { PkmTable } from "../model/pkm";
import pkmData from './Pkm_Data.json'

class migrations extends Basedatabase {
    public populateTable = async (data: PkmTable) => {
        try {
            await migrations.connection('Pkm_data')
                .insert({
                    id: data.id,
                    name: data.name,
                    pokedex_number: data.pokedexNumber,
                    generation: data.generation,
                    type_1: data.type1,
                    type_2: data.type2,
                    stat_total: data.statTotal,
                    atk: data.atk,
                    def: data.def,
                    sta: data.sta
                })
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}

const turnIntoObjectAndPopulate = async (objectData: any[]) => {
    const Migrations = new migrations()

    objectData.forEach(async element => {
        const pkm: PkmTable = {
            id: element.Row,
            name: element.Name,
            pokedexNumber: element.Pokedex_number,
            generation: element.Generation,
            type1: element.Type_1,
            type2: element.Type_2,
            statTotal: element.Stat_total,
            atk: element.ATK,
            def: element.DEF,
            sta: element.STA
        }
        try {
            await Migrations.populateTable(pkm)

            console.log(`${pkm.name} - ${pkm.id} added to table`)
        } catch (error: any) {
            throw new Error(error.message)
        }
    });
}

 turnIntoObjectAndPopulate(pkmData)
