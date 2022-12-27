/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

const { gets, print } = require('./funcoes-auxiliares');

const valores = [];

for(let i=0; i<5; i++){
    const numero = gets();
    valores.push(numero);
}

for(i=0; i<valores.length; i++){
    print(valores[i]);
}

let maior = 0;
let menor = 0;

for(i=0; i<valores.length; i++){
    if(i===0){
        maior = valores[i];
        menor = valores[i];
    }
    if(valores[i] > maior){
        maior = valores[i];
    }else
        if(valores[i] < menor){
            menor = valores[i];
        }
}

print('O MENOR valor foi ' + menor + ' e o MAIOR valor foi ' + maior);