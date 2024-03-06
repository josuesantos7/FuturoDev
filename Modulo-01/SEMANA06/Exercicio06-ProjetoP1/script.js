// // Para treinar um pouco mais requisições fetch inicie uma comunicação com a API via cep (Documentação - https://viacep.com.br/ ).
// // OBS:

// // Crie uma página html para imprimir o endereço através do cep.

// // Utilize este endpoint: https://viacep.com.br/ws/{cep_informado}/json

// // Caso a api retorne sucesso imprima em um alert o endereço formatado da seguinte forma: “logradouro, complemento - bairro - localidade/uf”

// // o cep_informado será passado por prompt pelo usuário.


let cep = prompt("Digite seu CEP: ");

fetch(`https://viacep.com.br/ws/${cep}/json`, {method: 'GET'})
.then((respFetch) => {
    console.log(respFetch)
    return respFetch.json();
})
.then((respApi) => {
    alert(`${respApi.lougradouro}, ${respApi.complemento} - ${respApi.bairro} - ${respApi.localidade}/${respApi.uf}`);
})
