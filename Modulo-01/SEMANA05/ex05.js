// Crie um novo array chamado numerosOrdenados contendo os mesmos números do array numeros. Em seguida, ordene esse novo array em ordem crescente e imprima-o no console.

const prompt = require ('prompt-sync') ({sigint: true});
let numeros = [];
contador = 0

while (contador < 5){
    let numero = parseInt(prompt("Digite um número: "))
    contador++
    numeros.push(numero)
}

console.log(numeros)

let numerosOrdenados = [...numeros]
numerosOrdenados.sort(function(a, b) {
    return a - b;
  });
console.log(numerosOrdenados)