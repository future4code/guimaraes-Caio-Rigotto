export abstract class BaseError extends Error {
    constructor(message: string, code: number) {
        super(message);
    }
}

export class MissingParams extends BaseError {
    constructor(){
        super('Missing parameters', 400)
    }
}

export class NameNotFound extends BaseError {
    constructor(){
        super('Name not found', 404)
    }
}