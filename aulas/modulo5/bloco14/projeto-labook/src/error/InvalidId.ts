import { CustomError } from "./CustomError";

export class InvalidID extends CustomError {
    constructor(){
        super('Invalid request, check id', 400)
    }
}