export class Band {
    constructor(
        private id: string,
        private name: string,
        private genre: string,
        private responsible: string
    ) { }

    getId(){
        return this.id;
    }
    getName(){
        return this.name;
    }
    getGender(){
        return this.genre;
    }
    getResponsible(){
        return this.responsible;
    }
    static toBandModel(band: any): Band {
        return new Band(band.id, band.name, band.genre, band.responsible);
      }
}

export interface BandInputDTO {
    name: string,
    genre: string,
    responsible:string,
    token: string
}