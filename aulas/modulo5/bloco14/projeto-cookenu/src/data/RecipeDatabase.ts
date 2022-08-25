import { CustomError } from "../error/customError";
import { recipe } from "../model/recipe"
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    TABLE_NAME = 'Cookenu_recipes'

    public insertRecipe = async (recipe: recipe) => {
        try {
            await RecipeDatabase.connection(this.TABLE_NAME)
                .insert({
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    created_at: recipe.createdAt,
                    author_id: recipe.authorId
                });

            await RecipeDatabase.connection('Cookenu_assignees')
                .insert({
                    recipe_id: recipe.id,
                    assignee_id: recipe.authorId
                });
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }
}