/*

Elabore um algoritmo que mostre sua condição de acordo com a tabela:

- MENOR QUE 18,5 Abaixo do peso	
- ENTRE 18,5 E 24,9	Normal	
- ENTRE 25,0 E 29,9	Sobrepeso
- ENTRE 30,0 E 39,9	Obesidade	
- MAIOR QUE 40,0 Obesidade Grave

*/

function classificarImc(imc){
    if(imc < 18.5){
        return 'Abaixo do peso';
    }else if(imc >= 18.5 && imc <= 24.9){
        return 'Normal';
    }else if(imc >= 25 && imc <= 29.9){
        return 'Sobrepeso';
    }else if(imc >= 30 && imc <= 39.9){  
        return 'Obesidade';
    }else{
        return 'Obesidade Grave';
    }
}

function calcularImc (peso, altura){
    return peso / Math.pow(altura,2);
}

function main(){

    const peso = 58;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);

    console.log('O seu IMC é de ' + imc.toFixed(2) + ' e sua situação é ' + classificarImc(imc));
}

main();