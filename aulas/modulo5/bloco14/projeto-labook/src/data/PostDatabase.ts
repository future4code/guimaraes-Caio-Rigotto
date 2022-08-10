import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";
import { post } from "../model/Post";


export class postDatabase extends BaseDatabase {
    async insertPost(input: any) {
        try {
            await BaseDatabase.connection("labook_posts")
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
            const queryResult: any = await BaseDatabase.connection("labook_posts")
                .select("*")
                .where({ id })

            if (!queryResult[0]) {
                throw new CustomError('Post not found, invalid Id', 404)
            }

            const result = new post(queryResult[0].id,
                queryResult[0].photo,
                queryResult[0].description,
                queryResult[0].type,
                queryResult[0].created_at,
                queryResult[0].author_id)

            const finishedResult = (post: post): any => {
                return {
                    id: post.getId(),
                    photo: post.getPhoto(),
                    description: post.getDescription(),
                    type: post.getType(),
                    created_at: post.getCreatedAt(),
                    author_id: post.getAuthorId(),
                }
            }

            return finishedResult(result)
        }
        catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }
}
