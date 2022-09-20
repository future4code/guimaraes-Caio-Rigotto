import { POST_TYPES } from "./PostTypes"

export type post = {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    createdAt: Date,
    authorId: string
}

export interface PostInputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    authorId: string
}

export interface PostOutputDTO {
    id: string,
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: Date,
    author_id: string
}
