
const { gets, print } = require('./funcoes-auxiliares');

const numeros = [];

for(let i=0; i<5; i++){
    const numeroSorteado = gets();
    numeros.push(numeroSorteado);
}

for(let i=0; i<numeros.length; i++){
    print(numeros[i]);
}

let maiorNum = 0;

for(let i=0; i<numeros.length; i++){

    if(numeros[i] > maiorNum){
        maiorNum = numeros[i];
    }
}
print('O maior numero sorteado foi ' + maiorNum);