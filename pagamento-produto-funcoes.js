/*

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal e a forma de pagamento escolhida.

Condições de pagamento:
1 - Á vista Débito, recebe 10% de desconto;
2 - Á vista Dinheiro ou PIX, recebe 15% de desconto;
3 - Em dua vezes, preço normal sem juros;
4 - Acima de duas vezes, preço normal com juros de 10%;
 */
function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto/100));
}

function aplicarJuros(valor, juros){
    return valor + (valor * (juros/100));
}

function precoAPagar(formaPagamento, precoProduto){
    if(formaPagamento === 1){
        return aplicarDesconto(precoProduto, 10);
    }else if(formaPagamento === 2){
        return aplicarDesconto(precoProduto, 15);
    }else if(formaPagamento === 3){
        return precoProduto;
    }else{
        return aplicarJuros(precoProduto, 10);
    }
}

(function (){
    const precoProduto = 150;
    const formaPagamento = 4;

    console.log('O preço a se pagar pelo produto é de ' + precoAPagar(formaPagamento, precoProduto));
}
)();