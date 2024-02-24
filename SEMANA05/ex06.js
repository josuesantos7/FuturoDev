// Crie um array chamado pares que contenha apenas os números pares do array numeros criado nos exercícios anteriores. Em seguida, imprima esse novo array no console. Utilize o método filter para realizar a operação de filtragem.

const prompt = require ('prompt-sync') ({sigint: true});
const numeros = [];
contador = 0

while (contador < 4){
    let numero = parseInt(prompt("Digite um número: "))
    contador++
    numeros.push(numero)
}

console.log("todos os números digitados: " + numeros)

let numerosPares = numeros.filter(pares =>(pares % 2) == 0);
console.log("Números pares: " + numerosPares)