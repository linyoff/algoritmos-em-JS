/*

Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número PAR encontrado

*/

const lista = [8, 9, 5, 4, 10, 6, 1, 2, 7];

for(let i=0; i< lista.length; i++){
    if(lista[i] % 2 === 0){
        console.log(lista[i]);
    }
}