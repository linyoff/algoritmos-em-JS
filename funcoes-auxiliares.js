
const entradas = [2, 40, 55, 12, 3];
let i=0;

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };