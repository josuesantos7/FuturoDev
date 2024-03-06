// Crie uma função que irá pedir 3 informações através do prompt, o nome, a idade e o email. Monte essas informações em um objeto igual ao do exercício 03, após isso salve esse objeto com a chave “user” no localStorage.

function informacoes() {
    nome = prompt('Qual é o seu nome?: ')
    idade = prompt('Qual sua idade?: ')
    email = prompt('Qual o seu email?: ')


    const usuario = {
        nome: nome,
        idade: idade,
        email: email
      };


    // Converter o objeto para JSON e salvar no localStorage
    localStorage.setItem('user', JSON.stringify(usuario));

    console.log('Informações salvas no localStorage com a chave "user".');
}


informacoes();