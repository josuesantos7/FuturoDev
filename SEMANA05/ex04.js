// Utilizando o array numeros do exercício anterior, calcule e imprima a soma de todos os elementos do array. Utilize o reduce para realizar a soma.

const prompt = require ('prompt-sync') ({sigint: true});
let numeros = [];
contador = 0

while (contador < 5){
    numero = parseInt(prompt("Digite um número: "))
    contador++
    numeros.push(numero)
}

const sum = numeros.reduce((acc, curr) => acc + curr, 0);
console.log(sum);