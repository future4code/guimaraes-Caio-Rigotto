// EX3

enum GENRE {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Movies = {
    name:string,
    launchYear:number,
    genre:GENRE,
    ratings?:number | string
}

function printMovie (par1:string, par2:number, par3:GENRE, par4?:number):Movies{
    return {
        name:par1,
        launchYear: par2,
        genre:par3,
        ratings:par4
    }
}

console.log(printMovie("Zombieland", 2009, GENRE.COMEDIA, 4.92))