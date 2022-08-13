export type relation = {
    id: string,
    senderId: string,
    receiverId: string
}

export interface RelationInputDTO {
    senderId: string,
    receiverId: string
}

export interface RelationOutputDTO {
    id: string,
    senderId: string,
    receiverId: string
}