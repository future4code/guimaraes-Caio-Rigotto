export type user = {
   id: string
   email: string
   password: string
   name: string
}

export interface UserInputDTO {
   name: string,
   email: string,
   password: string
}

export interface UserProfileDTO {
   token: string
}

export interface UserProfileOutputDTO {
   id: string,
   name: string,
   email: string
}

export interface UserProfileByIdDTO {
   token: string
   id: string
}

export interface UserLoginDTO {
   email: string,
   password: string
}

export interface EditUserInputDTO {
   name: string,
   nickname: string,
   id: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
}