import { Request, Response } from 'express'
import { PkmBusiness } from '../business/PkmBusiness';

export class PkmController {
    public getPkmByName = async (req: Request, res: Response) => {
        try {
            const pkmName = req.body.name

            const pkmBusiness = new PkmBusiness()

            const pkmData = await pkmBusiness.getPkmByName(pkmName)

            res.status(200).send(pkmData)
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}