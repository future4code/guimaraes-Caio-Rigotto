export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Invalid name")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Invalid email")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Invalid password")
    }
}

export class InvalidPasswordEmail extends CustomError{ 
    constructor(){
        super(400, "Invalid email or password")
    }
}

export class InvalidToken extends CustomError{ 
    constructor(){
        super(400, "Invalid token, please login again")
    }
}

export class MissingInformation extends CustomError{ 
    constructor(){
        super(400, "Missing information")
    }
}
