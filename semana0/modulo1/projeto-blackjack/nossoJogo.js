/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
{
   if(confirm("Quer começar a jogar:")){
      console.log("Boas vindas ao jogo de Blackjack!")
      let comprarJogador = []
      for(let i=0;i<2;i++){
         comprarJogador.push(comprarCarta())
      }
      // console.log(comprarJogador)
      const valorJogador = comprarJogador.map((comprarJogador)=>{
         return comprarJogador.valor}) 
      const cartasJogador = comprarJogador.map((comprarJogador)=>{
         return comprarJogador.texto})
         const valorTotalJog = Number(valorJogador[0]+valorJogador[1])
         console.log('Usuário - Cartas:',cartasJogador[0], cartasJogador[1], `Valor: ${valorTotalJog}`)

         let comprarComputador = []
         for(let i=0;i<2;i++){
            comprarComputador.push(comprarCarta())
         }
      // console.log(comprarComputador)
         const valorComputador = comprarComputador.map((comprarComputador)=>{
            return comprarComputador.valor}) 
         const cartasComputador = comprarComputador.map((comprarComputador)=>{
            return comprarComputador.texto})
            const valorTotalComp = Number(valorComputador[0]+valorComputador[1])
            console.log('Computador - Cartas:',cartasComputador[0], cartasComputador[1], `Valor: ${valorTotalComp}`)
         if(valorTotalComp > valorTotalJog){
            console.log("O Computador venceu!!")
         }else
         if(valorTotalJog > valorTotalComp){
            console.log("O Jogador venceu!!")
         }else
         if(valorTotalComp === valorTotalJog){
            console.log("Houve um empate!!")
         }
   }
   else{
   console.log("O jogo acabou!")
   }
}

// criar loop jog e comp compram 2 cartas - add as cartas em um array - imprimir respectivas cartas e valores
// o jogador que tiver o maior valor ganha - valores iguais, empate