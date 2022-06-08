const validateAge = (age: number) => {
    try {
       if(age < 18) {
           throw new Error("Mensagem 2");
       }
       console.log("Mensagem 3");
    } catch(error: any) {
       console.log("entrou no catch")
       console.log(error.message)
    }
 }
 
validateAge(10)