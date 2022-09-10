export abstract class BaseError extends Error {
    constructor(message: string, public code: number) {
      super(message);
    }
  }
  
export class MissingParameters extends BaseError {
  constructor(){
    super('Missing parameters', 404)
  }
}