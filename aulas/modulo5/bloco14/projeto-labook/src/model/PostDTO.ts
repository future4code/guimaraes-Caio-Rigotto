import { POST_TYPES } from "./PostTypes"

export interface CreatePostDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
}
