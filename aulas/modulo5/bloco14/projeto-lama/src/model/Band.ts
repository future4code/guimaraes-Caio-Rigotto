export class Band {
    constructor(
        private id: string,
        private name: string,
        private gender: string,
        private responsible: string
    ) { }

    getId(){
        return this.id;
    }
    getName(){
        return this.name
    }
    getGender(){
        return this.gender
    }
    getResponsible(){
        return this.responsible
    }
}

export interface BandInputDTO {
    name: string,
    gender: string,
    responsible:string,
    token: string
}