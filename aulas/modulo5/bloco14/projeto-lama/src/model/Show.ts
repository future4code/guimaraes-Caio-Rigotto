export class Show {
    constructor(
        private id: string,
        private day: string,
        private startTime: number,
        private endTime: number,
        private bandId: string
    ) { }
    getId() {
        return this.id
    }
    getDay() {
        return this.day
    }
    getStartTime() {
        return this.startTime
    }
    getEndTime() {
        return this.endTime
    }
    getBandId() {
        return this.bandId
    }
}

export interface ShowInputDTO {
    day: string,
    startTime: number,
    endTime: number,
    bandId: string
}