# EXERCÍCIO 1 

## a.
ALTER TABLE Auth_users ADD role VARCHAR(64) NOT NULL DEFAULT 'NORMAL';

## b.
export type AuthenticationData = {
    id: string,
    role: string
}

getTokenData = (token: string): AuthenticationData => {
        const result = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as AuthenticationData

        return result
}

## c.

### CONTROLLER
public signup = async (req: Request, res: Response) => {
    try {

      const input: UserInputDTO = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        nickname: req.body.nickname,
        role: req.body.role
      }

      const token = await this.userBusiness.createUser(input)

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
};

### BUSINESS
public createUser = async (input: UserInputDTO) => {
    try {
      let { email, password, name, nickname, role } = input

      if (!email || !password || !name || !nickname || !role) {
        throw new CustomError(422, "Ausência de parâmetros")
      }

      if (role !== 'NORMAL' && role !== 'ADMIN') {
        role = 'NORMAL'
      }

      const id = IdGenerator.generateId()
      const hash = await HashManager.generateHash(password)

      const user: user = {
        id,
        email,
        password: hash,
        name,
        nickname,
        role
      }

      await this.userDB.insertUser(user)
      const token = Authenticator.generateToken({ id, role })

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
};

### DATABASE
public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
          role: user.role
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
};

## d.

### CONTROLLER
public login = async (req: Request, res: Response) => {
    try {
      const input: UserLoginDTO = {
        email: req.body.email,
        password: req.body.password
      }

      const token = await this.userBusiness.login(input)

      res.status(200).send({message: "Login efetuado com sucesso", token})
    } catch (error: any) {
      res.status(400).send(error.message);
    }
};

### BUSINESS
public login = async (input: UserLoginDTO) => {
    try {
      const { email, password } = input

      if (!email || !password) {
        throw new CustomError(400, "Ausência de parâmetros")
      }

      const user = await this.userDB.getUserByEmail(email)
      const hashCompare = await HashManager.compareHash(
        password,
        user.password
      )

      if (!hashCompare) {
        throw new InvalidPassword()
      }

      const payload: AuthenticationData = {
        id: user.id,
        role: user.role
      }
      const token = Authenticator.generateToken(payload)

      return token
      
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
}

# EXERCÍCIO 2

## a.

### ROUTER
userRouter.get('/profile', userController.profile)

### CONTROLLER
public profile = async (req: Request, res: Response) => {
    try {
      const token: UserProfileDTO = {
        token: req.headers.authorization as string
      };

      const userProfile = await this.userBusiness.profile(token);

      res.status(200).send(userProfile);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
};

### BUSINESS 
public profile = async (input: UserProfileDTO) => {
    try {
      const { token } = input

      const authenticationData = Authenticator.getTokenData(token)

      console.log(authenticationData)

      if(authenticationData.role !== "NORMAL"){
        throw new CustomError(401, "Apenas um usuário de tipo 'NORMAL' pode acessar esta informação")
      }

      const userData = this.userDB.getUserById(authenticationData)

      if (!userData) {
        throw new CustomError(400, "Usuário não encontrado")
      }

      return userData

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
};

### DATABASE
public getUserById = async (authenticationData: AuthenticationData) => {
    try {
      const result = await UserDatabase.connection('Auth_users')
        .select()
        .where({ id: authenticationData.id })

      return result[0]
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
};