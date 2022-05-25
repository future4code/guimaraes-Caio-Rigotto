// Ex1

// function checaTriangulo(a:number, b:number, c:number) :string{
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }

//   console.log(checaTriangulo(12, 13, 14))

// Ex2

// function imprimeTresCoresFavoritas(){
//     const cor1:any = prompt("Insira sua primeira cor favorita")
//     const cor2:any = prompt("Insira sua segunda cor favorita")
//     const cor3:any = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }

//  imprimeTresCoresFavoritas()

// EX3

// function checaAnoBissexto(ano:number) {
//     const cond1:boolean = ano % 400 === 0
//     const cond2:boolean = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

//  console.log("É ano bissexto:", checaAnoBissexto(2011))
//  console.log("É ano bissexto:", checaAnoBissexto(2012))


// EX4
// function comparaDoisNumeros(num1:number, num2:number) {
//     let maiorNumero:number;
//     let menorNumero:number;
  
//     if (num1 > num2) {
//       maiorNumero = num1;
//       menorNumero = num2;
//     } else {
//       maiorNumero = num2;
//       menorNumero = num1;
//     }
  
//     const diferenca:number = maiorNumero - menorNumero;
  
//     return diferenca 
//   }

// console.log(comparaDoisNumeros(201,2223))

// EX5

