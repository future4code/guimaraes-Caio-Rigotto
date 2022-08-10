import { CustomError } from "../error/CustomError";
import { CreatePostDTO } from "../model/PostDTO";
import { BaseDatabase } from "./BaseDatabase";
import { post } from "../model/Post";


export class postDatabase extends BaseDatabase {
    async insert(input: CreatePostDTO) {
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
        } catch (error) {
            throw new CustomError('Something went wrong', 500)
        }
    }

    async getPostById(id: string) {
        try {
            const queryResult: any = await BaseDatabase.connection("labook_posts")
                .select("*")
                .where({ id })

            const result = new post(queryResult[0].id,
                queryResult[0].photo,
                queryResult[0].description,
                queryResult[0].type,
                queryResult[0].created_at,
                queryResult[0].author_id)

            const finishedResult = {
                id: result.getId(),
                photo: result.getPhoto(),
                description: result.getDescription(),
                type: result.getType(),
                createdAt: result.getCreatedAt(),
                authorId: result.getAuthorId(),
            }

            return finishedResult
        }
        catch (error: any) {
            throw new CustomError('Something went wrong', 500)
        }
    }
}
