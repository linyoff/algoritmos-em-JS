/*
Dado as 4 notas de um aluno, calcule a media onde:

- Media menor que 5 = reprovado;
- Media entre 5 e 7 = recuperacao;
- Media maior que 7 = aprovado;

*/

const nota1 = 8;
const nota2 = 9;
const nota3 = 5.8;
const nota4 = 6;

const mediaDeNotas = (nota1 + nota2 + nota3 + nota4) / 4;

if(mediaDeNotas < 5){
    console.log(mediaDeNotas, 'Reprovado');
}else if(mediaDeNotas >= 5 && mediaDeNotas <= 7){
    console.log(mediaDeNotas, 'Recuperacao');
}else{
    console.log(mediaDeNotas, 'Aprovado');
}