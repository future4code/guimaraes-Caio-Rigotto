function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
let valorCarro=Math.round(Number(valorTotalVendas/qtdeCarrosVendidos))
let comicao=Math.round(((valorCarro*0.05)+100)*qtdeCarrosVendidos)
if(qtdeCarrosVendidos===0){
  let salario=2000
  return salario
}
let salario=2000+comicao
console.log(valorCarro,comicao,salario)
return salario
}
