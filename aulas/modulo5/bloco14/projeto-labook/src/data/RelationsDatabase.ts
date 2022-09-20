import { CustomError } from "../error/CustomError";
import { relation, RelationInputDTO, RelationOutputDTO } from "../model/Relation";
import { BaseDatabase } from "./BaseDatabase";

export class RelationsDatabase extends BaseDatabase {
    private tableName = "labook_users_relations";

    async checkRelations(input: RelationInputDTO) {
        try {
            const { senderId, receiverId } = input

            const check: RelationOutputDTO[] = await BaseDatabase.connection(this.tableName)
                .select('*')
                .where({
                    sender_id: senderId,
                    receiver_id: receiverId
                })
                .orWhere({
                    sender_id: receiverId,
                    receiver_id: senderId
                })

            return check
        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }

    async insertRelation(input: relation) {
        try {
            await BaseDatabase.connection(this.tableName)
                .insert({
                    id: input.id,
                    sender_id: input.senderId,
                    receiver_id: input.receiverId
                })

        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }

    async deleteRelation(id: string) {
        try {
            await BaseDatabase.connection(this.tableName)
                .delete()
                .where({ id: id })

        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }
}