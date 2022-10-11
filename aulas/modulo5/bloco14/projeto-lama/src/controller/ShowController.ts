import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowInputDTO } from "../model/Show";

export class ShowController {
    async create(req: Request, res: Response) {
        try {
            const input: ShowInputDTO = {
                day: req.body.day,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                bandId: req.body.bandId
            }

            const showBusiness = new ShowBusiness()
            await showBusiness.createShow(input)
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}