import express from "express";
import { RecipeController } from "./RecipeController";

export const recipeRouter = express.Router()

const recipeController = new RecipeController()

recipeRouter.get('/:id', recipeController.getRecipeById)
recipeRouter.post('/', recipeController.create)
