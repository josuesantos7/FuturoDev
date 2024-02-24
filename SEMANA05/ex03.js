// Crie um array chamado numeros contendo cinco números inteiros. Utilize um loop for para imprimir cada número do array no console.

// Desafio: utilize a biblioteca prompt-sync para receber cada um dos 5 números.

const prompt = require ('prompt-sync') ({sigint: true});
numeros = []
contador = 0

while (contador < 5){
    numero = prompt("Digite um número: ")
    contador++
    numeros.push(numero)
}

numeros.forEach(function(numero) {
    console.log(numero);
});