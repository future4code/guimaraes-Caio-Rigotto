import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";
import { post, PostOutputDTO } from "../model/Post";


export class postDatabase extends BaseDatabase {
    private tableName = "labook_posts";

    async insertPost(input: post) {
        try {
            await BaseDatabase.connection(this.tableName)
                .insert({
                    id: input.id,
                    photo: input.photo,
                    description: input.description,
                    type: input.type,
                    created_at: input.createdAt,
                    author_id: input.authorId
                })
        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }

    async getPostById(id: string) {
        try {
            const queryResult: any = await BaseDatabase.connection(this.tableName)
                .select("*")
                .where({ id })

            if (!queryResult[0]) {
                throw new CustomError('Post not found, invalid Id', 404)
            }

            const result: PostOutputDTO = {
                id,
                photo: queryResult[0].photo,
                description: queryResult[0].description,
                type: queryResult[0].type,
                created_at: queryResult[0].created_at,
                author_id: queryResult[0].author_id,
            }

            return result
        }
        catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }
}
