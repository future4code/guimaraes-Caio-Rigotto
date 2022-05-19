// Ex 2
const operation = (process.argv[2])
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

const checkOp = () => {
    switch (operation.toLowerCase()) {
        case "add":
        case "min":
        case "minus":
        case "mult":
        case "times":
        case "div":
        case "divided":
            return true
        default:
            console.log("\x1b[31m","Tipo de operação inserida incorretamente!" , '\n')
            return false
    }
}

if (operation === undefined || operation === '' || checkOp() === false || isNaN(num1) || isNaN(num2)) {
    console.log("\x1b[31m","Favor, inserir informações no formato:", '\n', 'npm start <operação(add, min, mult, div)> <num1> <num2>')
} else {
    const doMath = () => {
        const result = () => {
            switch (operation.toLowerCase()) {
                case "add":
                    return num1 + num2;
                case "min":
                case "minus":
                    return num1 - num2;
                case "mult":
                case "times":
                    return num1 * num2;
                case "div":
                case "divided":
                    return num1 / num2;
            }
        }
        const op = () => {
            switch (operation.toLowerCase()) {
                case "add":
                    return "+";
                case "min":
                case "minus":
                    return "-";
                case "mult":
                case "times":
                    return "*";
                case "div":
                case "divided":
                    return "/";
            }
        }
        const frase = `${num1} ${op()} ${num2} = ${result()}`
        return frase
    }
    console.log('Resultado:', '\n', doMath())
}

