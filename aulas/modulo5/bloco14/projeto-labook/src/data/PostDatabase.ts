import { CustomError } from "../error/CustomError";
import { CreatePostDTO } from "../model/PostDTO";
import { BaseDatabase } from "./BaseDatabase";


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


}
