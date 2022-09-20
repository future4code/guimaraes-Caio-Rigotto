import { postDatabase } from "../data/PostDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { PostInputDTO } from "../model/Post";
import { generateId } from "../services/GenerateId";

export class postBusiness {
    async createPost(input: PostInputDTO) {
        try {
            const { photo,
                description,
                type,
                authorId } = input

            if (!photo || !description || !type || !authorId) {
                throw new InvalidRequest()
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
            await PostDatabase.insertPost(newPost)

        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }

    async getPostById(id: string) {
        try {
            const PostDatabase = new postDatabase()
            const post = await PostDatabase.getPostById(id)

            return post
        } catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }
}

