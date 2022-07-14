import { Customer } from "./classes/Customer";
import { User } from "./classes/User";

// 1.a. Não, pois o password é private e não há nenhum getter criado que pegue esta informação.

const firstUser = new User("1", "testonildo@gmail.com", "Testonildo", "uashiuadshahsdu")

// 1.b. O console.log foi chamado apenas uma vez.

// 2.a. O console.log do Customer é chamado apenas uma vez.

const firstCustomer = new Customer("2", "joaq@hotmail.com", "Joaquim", "sadhuuadshuhdas", "12323111233")

// 2.b. O console.log do User foi chamado uma vez, porque o Customer é uma classe filha de User e herda seu construtor.

// 3.a. Não é possível, pois a classe pai não possui um getter que passa o password. E também, como o password é uma informação privada,
// não é possível criar um getter na classe herdeira Customer.
console.log(firstUser.getId())
console.log(firstUser.getName())
console.log(firstUser.getEmail())


console.log("Customer -" ,firstCustomer.getId())
console.log("Customer -" ,firstCustomer.getName())
console.log("Customer -" ,firstCustomer.getEmail())
console.log("Customer -" ,firstCustomer.getCreditCard())


// 4.
console.log(firstUser.introduceSelf())
console.log("Customer -" ,firstCustomer.introduceSelf())

// 5. public introduceSelf(): string {
//     return `Olá, sou ${this.name}. Bom dia!`
// }