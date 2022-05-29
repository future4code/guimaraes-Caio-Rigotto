// EX1

const Name:string = "José"
const date:string = "24/12/1998"
const separeted:string[]= date.split('/')

const month = ()=>{
    switch(separeted[1]){
        case '01':
            return 'janeiro'
        case '02':
            return 'fevereiro'
        case '03':
            return 'março'
        case '04':
            return 'abril'
        case '05':
            return 'maio'
        case '06':
            return 'junho'
        case '07':
            return 'julho'
        case '08':
            return 'agosto'
        case '09':
            return 'setembro'
        case '10':
            return 'outubro'
        case '11':
            return 'novembro'
        case '12':
            return 'dezembro'
    }
}

function SeparaData ():string{
    return `Olá, me chamo ${Name}, nasci no dia ${separeted[0]} do mês de ${month()} do ano de ${separeted[2]}.`
}

console.log(SeparaData())