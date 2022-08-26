import { RecipeDatabase } from "../data/RecipeDatabase"
import { CustomError, InvalidToken, MissingInformation } from "../error/customError"
import { recipe, RecipeInputDTO } from "../model/recipe"
import Authenticator from "../services/Authenticator"
import { recipeDate } from "../services/DateFormater"
import IdGenerator from "../services/IdGenerator"

export class RecipeBusiness {
    private recipeDB: RecipeDatabase
    constructor() {
        this.recipeDB = new RecipeDatabase()
    }

    public create = async (input: RecipeInputDTO) => {
        try {
            const { title, description, token } = input

            if (!title || !description || !token) {
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

    public getRecipeById = async (input: any) => {
        try {
            const { token, id } = input

            if(!token || !id){
                throw new MissingInformation()
            }

            const authenticationData = Authenticator.getTokenData(token)

            if(!authenticationData){
                throw new InvalidToken()
            }

            const result = await this.recipeDB.getRecipeById(id)

            const recipe = {
                id: result.id,
                title: result.title,
                description: result.description,
                createdAt: recipeDate(result.created_at)
            }

            return recipe

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}