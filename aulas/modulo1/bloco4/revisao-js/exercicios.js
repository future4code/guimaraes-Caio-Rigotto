// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    // EXERCÍCIO
    // return array.reverse()
    // DESAFIO
    let arrayInv =[] //variável para receber os números
        for(let r=array.length-1;r>-1;r--){
            arrayInv.push(array[r])
        }
    return arrayInv
}


// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    // EXERCÍCIO
    // array.sort((a, b) =>{
    //     return a-b;
    //   })
    // return array

    // DESAFIO
    let fim=false
    while(fim===false){
        fim=true
        for(let i=1;i<array.length;i++){
            if(array[i-1]>array[i]){ //verifica se o número em determinado index é maior que o do próximo index
                let arrayTemp=array[i-1] //array temporário que guarda o número maior
                array[i-1]=array[i] //número menor é duplicado no lugar do maior 
                array[i]=arrayTemp //número guardado é colocado no index do número menor original
                fim=false
            } // se nenhum número é maior que o do próximo index, encerra o loop
        }
    }
    return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    // EXERCÍCIO
    // const pares = array.filter(item=> item%2===0)
    // return pares

    // DESAFIO
    let pares = []
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            pares.push(array[i])
        }
    }
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let paresElevados = []
    for(let i=0;i<array.length;i++){
        if(array[i]%2===0){
            paresElevados.push(array[i]*array[i])
        }
    }
    return paresElevados
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let checagem = true
    let maiorNumero=array[0] // define o maior número como o primeiro item do array
    while(checagem){
        checagem=false
        for(let i=1;i<array.length;i++){ 
            if(maiorNumero<array[i]){ // verifica se o número da variável maiorNumero é menor que o item do array
                maiorNumero=array[i] // se for menor, substitui
                checagem=true
            }
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objetoResultado = {}
    let menorNumero 
    let maiorNumero
    if(num1>num2){ // verifica qual numero é maior
        maiorNumero= num1
        menorNumero= num2
        objetoResultado={maiorNumero: maiorNumero}
    }else{
        maiorNumero= num2
        menorNumero= num1
        objetoResultado={maiorNumero: maiorNumero}
    }
    if(Number(objetoResultado.maiorNumero)%Number(menorNumero)===0){ // verifica se o maior número é divisível pelo menor
        objetoResultado={
            ...objetoResultado,
            maiorDivisivelPorMenor: true}
    }else{
        objetoResultado={
            ...objetoResultado,
            maiorDivisivelPorMenor: false}
    }
    objetoResultado={
        ...objetoResultado,
        diferenca: (maiorNumero-menorNumero)} // adiciona a diferença ao objeto

return objetoResultado
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = [0]
    for(let i=0;i<n-1;i++){
        pares.push(pares[i]+2)
    }
    return pares    
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    const escaleno="Escaleno"
    const isosceles="Isósceles"
    const equilatero="Equilátero"

    if((ladoA===ladoB)&&(ladoA===ladoC)&&(ladoB===ladoC)){ // checa se os lados são todos iguais
        return equilatero
    }else
    if((ladoA!==ladoB)&&(ladoA!==ladoC)&&(ladoB!==ladoC)){ // checa se os lados são todos diferentes
        return escaleno
    }else{
        return isosceles
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayResultado=[]

    array.sort((a, b) =>{
    return a-b
    })
    arrayResultado.push(array[array.length-2])
    arrayResultado.push(array[1])
    return arrayResultado    
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let frase=`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
    return frase
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let anonimo={
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return anonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let arrayResultado=pessoas.filter((pessoa)=>{
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
    })
    return arrayResultado
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let arrayResultado=pessoas.filter((pessoa)=>{
        return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60
    })
    return arrayResultado
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let compras = 0
    for(let compra of contas){
        compras=compra.compras.reduce((a, b)=>{ // pega cada elemento da chave compras de cada array e os soma
            a= a + b
            return a
        })
        compra.compras=[]
        compra.saldoTotal -= compras

        return contas
    }
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let ordenar=(a,b)=>{ // verifica a chave nome e retorna um resultado de acordo com os parametros da função .sort()
        if(a.nome<b.nome){
            return -1
        }
        if(a.nome>b.nome){
            return 1
        }
        return 0
    }
    consultas.sort(ordenar)
    return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    let ordenar=(a,b)=>{ // verifica a chave o mês, depois o dia e retorna um resultado de acordo com os parametros da função .sort()
        a= a.dataDaConsulta.split("/")
        b= b.dataDaConsulta.split("/")
        let checagemMes = true
        while(checagemMes){
            checagemMes=false
            if(a[1]<b[1]){
                checagemMes=true
                return -1
            }
            if(a[1]>b[1]){
                checagemMes=true
                return 1
            }  
        }
        if(a[0]<b[0]){
            return -1
        }
        if(a[0]>b[0]){
            return 1
        }
        return 0
    }
    consultas.sort(ordenar)
    return consultas
}