/*

Elabore um algoritmo que mostre sua condição de acordo com a tabela:

- MENOR QUE 18,5 Abaixo do peso	
- ENTRE 18,5 E 24,9	Normal	
- ENTRE 25,0 E 29,9	Sobrepeso
- ENTRE 30,0 E 39,9	Obesidade	
- MAIOR QUE 40,0 Obesidade Grave

*/

const peso = 58;
const altura = 1.75;
let situação;


if(imc < 18.5){
    situação = 'Abaixo do peso';
}else if(imc >= 18.5 && imc <= 24.9){
    situação = 'Normal';
}else if(imc >= 25 && imc <= 29.9){
    situação = 'Sobrepeso';
}else if(imc >= 30 && imc <= 39.9){  
    situação = 'Obesidade';
}else{
    situação = 'Obesidade Grave';
}

console.log('O seu IMC é de' + imc.toFixed(2) + 'e sua situação é' + situação);