/*
Calcular o valor de uma viagem.

Tres variaveis:
1.Preço do combustivel;
2.Valor médio de gasto do carro;
3.Distância em Km da viagem.

Imprimir no terminal o valor que sairá a viagem.
*/

const combustivel = 5;
const kmPorLitro = 12;
const kmViagem = 100;

const valorViagem = (kmViagem/kmPorLitro) * combustivel;

console.log('O valor da viagem será de', valorViagem.toFixed(2));