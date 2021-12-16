function calculaPrecoTotal(quantidade) {
  let precoFinal = 0
  if(quantidade<12){
    precoFinal=1.30*quantidade
    return precoFinal
  }
  precoFinal=1.00*quantidade
  return precoFinal
}