import { postDatabase } from "../data/PostDatabase";
import { CustomError } from "../error/CustomError";
import { generateId } from "../services/GenerateId";

export class postBusiness {
    async create(input: any) {
        try {
            const { photo,
                description,
                type,
                authorId } = input

            if (!photo || !description || !type || !authorId ) {
                throw new CustomError('"photo", "description", "type" and "authorId" must be provided', 406)
            }

            const postId: string = generateId()
            const createdAt = new Date(Date.now())

            const newPost = {
                id: postId,
                photo,
                description,
                type,
                createdAt,
                authorId
            }

            const PostDatabase = new postDatabase()
            await PostDatabase.insert(newPost)

        } catch (error) {
            throw new CustomError('Something went wrong', 500)
        }
    }
}

