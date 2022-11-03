function escreverNome(nome){
    return 'Meu nome é ' + nome;
}

function verificarMaiorIdade(idade){
    if(idade < 18){
        console.log(escreverNome('Aliny') + 'e ainda não atingi a maior idade');
    }else {
        console.log(escreverNome('Aliny') + ' e já atingi a maior idade');
    }
}
verificarMaiorIdade(19);