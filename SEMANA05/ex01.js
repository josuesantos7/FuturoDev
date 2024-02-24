// Crie um array chamado frutas contendo três frutas diferentes. Em seguida, imprima no console a segunda fruta do array.

// Desafio: utilize a biblioteca prompt-sync para receber cada uma das 3 frutas.

const prompt = require ('prompt-sync') ({sigint: true});

contador = 0
frutas = []

while (contador < 3){
    const fruta = prompt("Digite o nome de uma fruta: ")
    contador++
    frutas.push(fruta)
}

console.log(frutas[1] + " foi a segunda fruta guardada no array.")