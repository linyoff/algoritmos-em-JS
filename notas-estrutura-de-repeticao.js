const notas = [5, 7, 8, 2];

notas.push(5);
notas.push(8);

let soma = 0;

for(let i=0; i<notas.length; i++){
    soma = soma + notas[i];
}

const media = soma / notas.length;
console.log(media);
