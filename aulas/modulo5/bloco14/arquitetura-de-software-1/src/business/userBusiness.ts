import { userDataBase } from '../data/userDatabase';
import { v4 as generateId } from 'uuid';

export class userBusiness {
    createUser = async (user: any): Promise<void> => {

        try {

            const { name, email, password } = user

            if (!user.name || !user.email || !user.password) {
                throw new Error("Por favor, preencha todos os parâmetros");
            }

            if (user.email.indexOf("@") === -1) {
                throw new Error("Email inválido");
            }

            if (user.password.length < 6) {
                throw new Error("Password deve ter pelo menos 6 caracteres");
            }

            const id = generateId();
            const UserDataBase = new userDataBase()

            await UserDataBase.insertUser({
                id,
                name,  
                email, 
                password})


        } catch (error: any) {
            throw new Error(error.message || "Erro criando usuário.");
        }
    }
}