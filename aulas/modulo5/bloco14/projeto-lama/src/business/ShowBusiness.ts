import { ShowInputDTO } from "../model/Show";

export class ShowBusiness {
    async createShow(show: ShowInputDTO) {
        try {
            const { day,
                startTime,
                endTime,
                bandId } = show

                
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}