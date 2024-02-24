// Usando o mesmo array do exercício anterior, adicione mais uma fruta ao array frutas. Em seguida, remova a primeira fruta do array. Imprima o array atualizado no console.

const prompt = require ('prompt-sync') ({sigint: true});

contador = 0
frutas = []

while (contador < 3){
    const fruta = prompt("Digite o nome de uma fruta: ")
    contador++
    frutas.push(fruta)
}

// console.log(frutas[1] + " foi a segunda fruta guardada no array.")
console.log(frutas)


const fruta = prompt("Digite o nome de mais uma fruta: ")
frutas.push(fruta)
console.log(frutas)

frutas.shift();
console.log("O novo array ficou da seguinte forma: " + frutas)