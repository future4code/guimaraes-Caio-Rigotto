import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { RecipeInputDTO } from "../model/recipe";

export class RecipeController {
    private recipeBusiness: RecipeBusiness
    constructor() {
        this.recipeBusiness = new RecipeBusiness()
    }

    public create = async (req: Request, res: Response) => {
        try {
            const input: RecipeInputDTO ={
                title: req.body.title,
                description: req.body.description,
                token: req.headers.authorization as string
            }

            await this.recipeBusiness.create(input)

            res.status(201).send({ message: "Recipe created"});
        } catch (error: any) {
            let message = error.message || error.sqlMessage
            res.status(error.statusCode || 400).send(message)
        }
    };
}