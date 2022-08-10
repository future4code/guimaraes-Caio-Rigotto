import { POST_TYPES } from "./PostTypes"

export class post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private createdAt: Date,
        private authorId: string) { }

        getId(){
            return this.id
        }
        getPhoto(){
            return this.photo
        }
        getDescription(){
            return this.description
        }
        getType(){
            return this.type
        }
        getCreatedAt(){
            return this.createdAt
        }
        getAuthorId(){
            return this.authorId
        }
}

