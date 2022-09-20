import { CustomError } from "./CustomError";

export class SameUserId extends CustomError {
    constructor(){
        super("Id's can't be the same", 400)
    }
}