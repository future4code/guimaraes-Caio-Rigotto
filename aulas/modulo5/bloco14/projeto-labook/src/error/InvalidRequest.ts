import { CustomError } from "./CustomError";

export class InvalidRequest extends CustomError{
    constructor(){
        super("Invalid request, one or more information is missing", 400)
    }
}