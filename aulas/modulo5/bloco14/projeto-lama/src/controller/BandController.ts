import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";

export class BandController {
    async create(req: Request, res: Response) {
        try {
            

        } catch (error:any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
}