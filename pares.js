/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

const { gets, print } = require('./funcoes-auxiliares');

const numeros = [];

for(let i=0; i<5; i++){
    const numero = gets();
    numeros.push(numero);
}

for(i=0; i<5; i++){
    if(numeros[i] % 2 === 0){
        print(numeros[i]);
    }
}