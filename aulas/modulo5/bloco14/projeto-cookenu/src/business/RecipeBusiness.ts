import { RecipeDatabase } from "../data/RecipeDatabase"
import { CustomError, InvalidToken, MissingInformation } from "../error/customError"
import { recipe, RecipeInputDTO } from "../model/recipe"
import Authenticator from "../services/Authenticator"
import IdGenerator from "../services/IdGenerator"

export class RecipeBusiness {
    private recipeDB: RecipeDatabase
    constructor() {
        this.recipeDB = new RecipeDatabase()
    }

    public create = async (input: RecipeInputDTO) => {
        try {
            const { title, description, token } = input

            if(!title || !description || !token){
                throw new MissingInformation()
            }

            const authenticationData = Authenticator.getTokenData(token)

            if (!authenticationData) {
                throw new InvalidToken()
            }

            const id = IdGenerator.generateId()
            const createdAt = new Date(Date.now())

            const newRecipe: recipe = {
                id,
                title,
                description,
                createdAt,
                authorId: authenticationData.id
            }

            await this.recipeDB.insertRecipe(newRecipe)

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}