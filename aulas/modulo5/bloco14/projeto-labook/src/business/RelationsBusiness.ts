import { RelationsDatabase } from "../data/RelationsDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { RelationInputDTO } from "../model/Relation";
import { generateId } from "../services/GenerateId";

export class RelationsBusiness {
    async createRelation(input: RelationInputDTO) {
        try {
            const { senderId, receiverId } = input

            if (!senderId || !receiverId) {
                throw new InvalidRequest()
            }
            if(senderId === receiverId){
                throw new CustomError("Sender id and receiver id can't be the same", 402)
            }

            const id = generateId()

            const newRelation = {
                id,
                senderId,
                receiverId
            }

            const relationsDatabase = new RelationsDatabase()

            const checkRelations = await relationsDatabase.checkRelations(newRelation)

            if(checkRelations.length > 0){
                throw new CustomError("Users already have a friendship", 402)
            }

            await relationsDatabase.insertRelation(newRelation)

        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }
}