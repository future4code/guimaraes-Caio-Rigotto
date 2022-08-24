# EXERCÍCIO 1

# a. 
Usar strings ao invés de números para criar ids dá a opção de utilizar letras maiúsculas, minúsculas e símbolos nesta id, aumentando a quantidade de ids únicos possíveis e também os tornando mais diversificados, aumentando a segurança dos dados

# b. 
export class IdGenerator {
    generateId = () => {
        return v4()
    }
}

# EXERCÍCIO 2

# a.
A linha "as string" explica para o compilador que os dados que estão chegando naquela linha é do tipo string. Precisamos usá-lo porque no typescript o compilador precisa entender que os dados que estão chegando estão corretos e são do tipo necessário.

# b.
export type AuthenticationData = {
    id: string
}

export class Authenticator {
    generateToken = ({id}: AuthenticationData):string => {
        const token = jwt.sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: process.env.JWT_DURATION }
        )
        return token
    }

    getTokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
        return payload
    }
}

# EXERCÍCIO 3

## ROUTER
userRouter.post('/signup', userController.signUp)

## CONTROLLER
public signUp = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email, password } = req.body;

      const input: UserInputDTO = {
        name,
        nickname,
        email,
        password,
      };
      const userBusiness = new UserBusiness()

      const token = await userBusiness.signUp(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

## BUSINESS
  public signUp = async (input: UserInputDTO) : Promise<string> => {
    try {
      const { name, nickname, email, password } = input;

      if (!name || !nickname || !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }
      if(password.length < 6){
        throw new InvalidPassword()
      }

      const id: string = idGenerator.generateId();

      const user: user = {
        id,
        name,
        nickname,
        email,
        password,
      };
      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const token = authenticator.generateToken({id})

      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

## DATABASE
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

# EXERCÍCIO 4

  public getUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection('Auth_users')
      .select()
      .where({email})

      return result[0]
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }; 

# EXERCÍCIO 5

## ROUTER
  userRouter.post('/login', userController.login)

## CONTROLLER
  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: LoginInputDTO = {
        email,
        password,
      };
      const userBusiness = new UserBusiness()

      const token = await userBusiness.login(input);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

## BUSINESS
  public login = async (input: LoginInputDTO) : Promise<string> => {
    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      const userDatabase = new UserDatabase();
      
      const user = await userDatabase.getUserByEmail(email)

      if(!user){
        throw new UserNotFound()
      }
      if(user.password !== password){
        throw new InvalidPassword()
      }

      const token = authenticator.generateToken({id: user.id})

      return token

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

# EXERCÍCIO 6

# a. 
A linha "as any" explica para o compilador que os dados que estão chegando naquela linha é de que qualquer tipo. Precisamos usá-lo porque no typescript o compilador precisa entender que os dados que estão chegando estão corretos e são do tipo necessário.

# b. 
    getTokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticationData
        return payload
    }

# EXERCÍCIO 7

# a. 
  public getUserById = async (id: string) => {
    try {
      const result = await UserDatabase.connection('Auth_users')
      .select()
      .where({id})

      return result[0]
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }; 

# b.
## ROUTER
userRouter.get('/profile', userController.userProfile)

## CONTROLLER
public userProfile = async (req: Request, res: Response) => {
    try {
      const token: ProfileInputDTO = {
        token: req.headers.authorization as string
      };

      const userBusiness = new UserBusiness()
      const userProfile = await userBusiness.userProfile(token);

      res.status(200).send(userProfile);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

## BUSINESS
public userProfile = async (input: ProfileInputDTO) => {
    try {
      const { token } = input

      const { id } = authenticator.getTokenData(token)
      
      const userDatabase = new UserDatabase()
      const userData = userDatabase.getUserById(id)

      if (!userData) {
        throw new UserNotFound()
      }

      return userData

    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };