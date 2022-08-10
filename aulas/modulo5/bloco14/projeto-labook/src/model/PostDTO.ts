import { POST_TYPES } from "./PostTypes"

export interface CreatePostDTO {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}
