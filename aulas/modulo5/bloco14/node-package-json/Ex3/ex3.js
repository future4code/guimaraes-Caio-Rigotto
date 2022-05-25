// Ex 3
let toDoList = ["Começar uma lista"]

const capitalize = (string) => {
    const lower = string.toLowerCase()
    return string.charAt(0).toUpperCase() + lower.slice(1)
}

const toDo = process.argv[2]
const checker = process.argv[3]



if (checker !== undefined) {
    console.log("\x1b[31m","Você deve passar as informações em uma única string:", '\n', 'npm start "<Atividade com espaços>"')
} else {
    const addList= () => {toDoList.push(capitalize(toDo))}
    addList()
    console.log("Atividade adicionada à lista!")
    console.table(toDoList)
}