import { CustomError } from "./CustomError";

export class EmailDuplicate extends CustomError {
    constructor(){
        super('Invalid request, email is a duplicate', 400)
    }
}