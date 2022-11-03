/*

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal e a forma de pagamento escolhida.

Condições de pagamento:
1 - Á vista Débito, recebe 10% de desconto;
2 - Á vista Dinheiro ou PIX, recebe 15% de desconto;
3 - Em dua vezes, preço normal sem juros;
4 - Acima de duas vezes, preço normal com juros de 10%;
 */

const precoProduto = 150;
const formaPagamento = 4;
let precoAPagar;

if(formaPagamento === 1){
    precoAPagar = precoProduto - ((10/100) * precoProduto);
}else if(formaPagamento === 2){
    precoAPagar = precoProduto - ((15/100) * precoProduto);
}else if(formaPagamento === 3){
    precoAPagar = precoProduto;
}else{
    precoAPagar = precoProduto + ((10/100) * precoProduto);
}

console.log('O preço a se pagar pelo produto é de ' + precoAPagar);