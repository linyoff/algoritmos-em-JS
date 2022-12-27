/*

Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.

*/

class Carro {
    marca;
    cor;
    gastoMdKm;

    constructor (marca, cor, gastoMdKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMdKm = gastoMdKm;
    }

    calcularGastoCarro(km, precoCombustivel){
        return km * this.gastoMdKm * precoCombustivel;
    }
}

const onix = new Carro('Ônix', 'Branca', 1/12);
console.log('O valor dessa viagem com o ' + onix.marca + ' será de ' + onix.calcularGastoCarro(89, 4.87).toFixed(2));

const palio = new Carro('Palio', 'Prata', 1/10);
console.log('O valor dessa viagem com o ' + palio.marca + ' será de ' + palio.calcularGastoCarro(89, 4.87).toFixed(2));
