import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandInputDTO } from "../model/Band";

export class BandController {
    async create(req: Request, res: Response) {
        try {
            const input:BandInputDTO = {
                name: req.body.name,
                gender: req.body.gender,
                responsible: req.body.responsible,
                token: req.headers.authorization as string
            }

            const bandBusiness = new BandBusiness()
            await bandBusiness.createBand(input)

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}