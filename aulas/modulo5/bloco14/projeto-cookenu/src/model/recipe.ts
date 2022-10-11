export type recipe = {
    id: string
    title: string
    description: string
    createdAt: Date,
    authorId: string
}

export interface RecipeInputDTO {
    title: string,
    description: string,
    token: string
}

export interface RecipeGetByIdInputDTO {
    token: string,
    id: string
}

export interface RecipeGetByIdOutputDTO {
    id: string,
    title: string,
    description: string,
    createdAt: string
}
