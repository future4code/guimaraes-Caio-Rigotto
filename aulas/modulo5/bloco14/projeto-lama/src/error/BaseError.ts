export abstract class BaseError extends Error {
    constructor(message: string, public code: number) {
      super(message);
    }
  }
  
export class MissingParameters extends BaseError {
  constructor(){
    super('Missing parameters', 400)
  }
}

export class InvalidEmail extends BaseError {
  constructor(){
    super('Invalid email', 404)
  }
}

export class InvalidPassword extends BaseError {
  constructor(){
    super('Invalid password', 404)
  }
}

export class Unauthorized extends BaseError {
  constructor(){
    super('Unauthorized, user must be admin', 401)
  }
}