/*
Calcular o valor de uma viagem.

Cinco variaveis:
1.Preço da gasolina;
2.Preço do etanol;
3.O tipo de combustivel;
4.Valor médio de gasto do carro;
5.Distância em Km da viagem.

Imprimir no terminal o valor que sairá a viagem.
*/

const gasolina = 4.75;
const etanol = 3.09;
const gastoMdCarro = 12;
const tipoCombustivel = 'Gasolina';
const distânciaKm = 211;

let valorViagem;

if(tipoCombustivel === 'Gasolina'){
    valorViagem = (distânciaKm / gastoMdCarro) * gasolina;
}else{
    valorViagem = (distânciaKm / gastoMdCarro) * etanol;
}
console.log('O valor da viagem será de', valorViagem.toFixed(2));



