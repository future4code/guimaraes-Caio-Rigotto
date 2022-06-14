const validateAge = (age: number) => {
    try {
       if(age < 18) {
           throw new Error("Menor de 18 anos!");
       }
       console.log("Deu tudo certo, sem mensagens de erro!");
    } catch(err: any) {
       console.log("Entrou no catch")
       console.log(err.message)
    }
 }
 
validateAge(10)