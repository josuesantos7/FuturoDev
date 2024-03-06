const texto=document.querySelector("#texto");
const meuArquivo = "data.json"

const dataContainer = document.getElementById('data-container');



fetch(meuArquivo)
    .then(response => {
        return response.json();
})
    .then(data => {
        console.log(data)


        dataContainer.innerHTML = `
            <p><strong>Nome:</strong> ${data.nome}</p>
            <p><strong>Idade:</strong> ${data.idade}</p>
            <p><strong>Email:</strong> ${data.email}</p>
        `;

})