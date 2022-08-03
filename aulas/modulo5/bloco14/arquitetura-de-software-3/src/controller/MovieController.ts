import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { CreateMovieDTO } from "../model/MovieDTO";

export class MovieController {
    async create(req: Request, res: Response): Promise<void> {
        try {
            const { title,
                description,
                durationInMinutes,
                yearOfRelease } = req.body;

            const input: CreateMovieDTO = {
                title,
                description,
                durationInMinutes,
                yearOfRelease
            }

            const movieBusiness = new MovieBusiness();
            await movieBusiness.create(input);

            res.status(201).send({ message: "Filme cadastrado com sucesso" });
        } catch (error: any) {
            res.status(400).send(error.message);
        }
    }
    async get(req: Request, res: Response): Promise<void> {
        try {
            const Movies = await new MovieBusiness().get();

            res.send(Movies).status(200)
        } catch (error: any) {
            res.send({ message: error.message }).status(error.status)
        }
    }
}
