import { Request, Response } from "express";
import { BandBusiness } from "../business/BandBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { BandInputDTO } from "../model/Band";

export class BandController {
    async create(req: Request, res: Response) {
        try {
            const input: BandInputDTO = {
                name: req.body.name,
                genre: req.body.genre,
                responsible: req.body.responsible,
                token: req.headers.authorization as string
            }

            const bandBusiness = new BandBusiness()
            await bandBusiness.createBand(input)

            res.status(201).send("Success")
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
    async getBandInfo(req: Request, res: Response) {
        try {
            const input = {
                id: req.body.id,
                name: req.body.name
            }

            const bandBusiness = new BandBusiness()
            const bandInfo = await bandBusiness.getBandInfo(input)

            res.status(200).send({bandInfo})
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}