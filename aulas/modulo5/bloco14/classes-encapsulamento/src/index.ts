// 1.a. O constructor é um método de classe que permite o acesso às informações de um objeto.
// O chamamos com a função constructor(){}

// 1.b. O constructor foi chamado apenas uma vez.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}

const userTest: UserAccount = new UserAccount("11111111111", "Joaquim", 22)

console.log(userTest)

// 1.c. Precisamos criar métodos dentro da classe que acessam estas informações.

// 2.
class Transaction {
    private description: string;
    private value: number;
    private date: string

    constructor(description: string,
        value: number,
        date: string) {
        this.description = description;
        this.value = value;
        this.date = date;
    }
    public getDescription = (): string => {
        return this.description
    }
    public getData = (): string => {
        return `Description: ${this.description} - Value: ${this.value} - Date: ${this.date}`
    }
}

const transaction1 = new Transaction("descrição", 12, "data")

console.log(transaction1.getDescription())
console.log(transaction1.getData())

// 3.
class Bank {
    private accounts: UserAccount[];
    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }
    public changeAccount = (newAccount: UserAccount[]) => {
        this.accounts = newAccount

        console.log(newAccount)
    }
    public getAccount = ():UserAccount[] => {
        return this.accounts
    }
}

const bankAccount: Bank = new Bank([userTest])

console.log(bankAccount.getAccount())
