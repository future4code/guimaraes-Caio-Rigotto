// Ex 1
// a) Utilizamos o process.argv, lembrando que deve ser usado apenas do index 2 para cima.
// b)
const name = process.argv[2]
const age = Number(process.argv[3])
const agePlusSeven = age + 7

if(name === undefined || isNaN(age)){
    console.log("Favor, inserir informações no formato:", '\n', 'npm start <nome> <idade>')
}else{
    console.log(`Olá, ${name}! Você tem ${age} anos! Em sete anos você terá ${agePlusSeven}.`)
}