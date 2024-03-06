// Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as validações dentro de uma promise para que caso seja uma par retorne para o then a mensagem: "Número validado é par”.

// Caso o valor seja ímpar, retorne para o catch a mensagem: “Error: número informado é impar”.

// OBS: Se for par ele deve chamar o “resolve”, se não for par ele irá chamar o “reject”. Não esqueça de enviar a mensagem como parâmetro


const numero = 100;

function verificarNumero(numero) {
    return new Promise((resolve, reject) => {
        if (typeof numero !== 'number') {
            reject("Error: O valor informado não é um número");
        } else if (numero % 2 === 0){
            resolve("Número validado é par")
        } else {
            reject('Error: número informado é impar')
        }
    });
}

verificarNumero(numero)
.then((mensagem) => {
    console.log(mensagem);
})

.catch((erro) => {
    console.log(erro);
})