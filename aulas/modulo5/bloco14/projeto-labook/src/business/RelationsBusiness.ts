import { RelationsDatabase } from "../data/RelationsDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { SameUserId } from "../error/SameUserId";
import { RelationInputDTO } from "../model/Relation";
import { generateId } from "../services/GenerateId";

export class RelationsBusiness {
    async createRelation(input: RelationInputDTO) {
        try {
            const { senderId, receiverId } = input
            const id = generateId()

            if (!senderId || !receiverId) {
                throw new InvalidRequest()
            }
            if (senderId === receiverId) {
                throw new SameUserId()
            }

            const newRelation = {
                id,
                senderId,
                receiverId
            }

            const relationsDatabase = new RelationsDatabase()

            const checkRelations = await relationsDatabase.checkRelations(newRelation)

            if (checkRelations.length > 0) {
                throw new CustomError("Users already have a friendship", 400)
            }

            await relationsDatabase.insertRelation(newRelation)

        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }

    async deleteRelation(input: RelationInputDTO) {
        try {
            const { senderId, receiverId } = input

            if (!senderId || !receiverId) {
                throw new InvalidRequest()
            }
            if (senderId === receiverId) {
                throw new SameUserId()
            }

            const relationsDatabase = new RelationsDatabase()

            const checkRelations = await relationsDatabase.checkRelations(input)

            if (!checkRelations[0]) {
                throw new CustomError("Users don't have a friendship, check id's", 400)
            }

            await relationsDatabase.deleteRelation(checkRelations[0].id)

        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }
}