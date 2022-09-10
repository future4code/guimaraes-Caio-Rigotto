import { UserInputDTO, LoginInputDTO } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { MissingParameters } from "../error/BaseError";

export class UserBusiness {

    async createUser(user: UserInputDTO) {

        const { email, name, password } = user
        let role = user.role.toUpperCase()

        if (!email || !name || !password) {
            throw new MissingParameters()
        }
        if(role !== "NORMAL" && role !== "ADMIN" && !role){
            role = "NORMAL"
        }

        const idGenerator = new IdGenerator();
        const id = idGenerator.generate();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(user.password);

        const userDatabase = new UserDatabase();
        await userDatabase.createUser(id, user.email, user.name, hashPassword, role);

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id, role });

        return accessToken;
    }

    async getUserByEmail(user: LoginInputDTO) {

        const userDatabase = new UserDatabase();
        const userFromDB = await userDatabase.getUserByEmail(user.email);

        const hashManager = new HashManager();
        const hashCompare = await hashManager.compare(user.password, userFromDB.getPassword());

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }
}