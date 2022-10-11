import { BaseError } from "./BaseError";

export class MissingInformation extends BaseError{
    constructor(){
        super('Missing information', 400)
    }
}