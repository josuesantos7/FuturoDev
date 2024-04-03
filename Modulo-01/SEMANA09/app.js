const express = require("express")

const app = express();

app.use(express.json())


const logHoraMiddleware = (req, res, next) => {
    const horaAtual = new Date().toISOString();
    console.log(
      `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
      );
    next();
  };


app.get("/", logHoraMiddleware, function(req, res){
    res.send("Iniciando o exercício")
})

app.get("/sobre", logHoraMiddleware, function(req, res){
    res.send("<h1>Olá testando, esse aqui e o meu sobre</h1>")
})

app.get("/contato", logHoraMiddleware, function(req, res){
    res.send("<h1>Contato</h1>")
})


app.get("/produto/:id", logHoraMiddleware, function(req, res){
    res.send(`Você selecionou o produto`)
})

//  configurar para servir um arquivo estático.
app.get("/imagem",logHoraMiddleware, function(req, res){
    res.sendFile(__dirname + "/public/pexels.jpg")
})




// Minha lista, simulando o meu banco de dados.
let usersList = []


// criar novo usuário.
app.post("/users", logHoraMiddleware, function(req, res){
    const {id, nome, idade, cpf } = req.body

    let newUser = {id, nome, idade, cpf}

    if (newUser){
        usersList.push(newUser)
        return res.status(201).json({
            message:`Pessoa adicionada com sucesso: ${nome}, ${idade}, ${cpf}`
        })
    }
    return res.status(400).json({
        message: "Bad request"
    })    
})


// Retornar a lista completa de usuários.
app.get("/users", logHoraMiddleware, function(req, res){
    res.json(usersList)
})


// retornar um usuário específico pelo Id.
app.get("/users/:id", logHoraMiddleware, function(req, res){
    const id = (req.params.id);

    let user = usersList.filter((value) => value.id === parseInt(id))[0]

    if(!user) {
        return res.status(404).json({
            error: "Usuário não encontrado"
        })
    }

    res.send(JSON.stringify(user))
})


// realizar a atualização (update)
app.put("/users/:id", logHoraMiddleware, function(req, res){
    const { nome, idade, cpf } = req.body
    const userid = req.params.id
    const mylist = usersList.filter((user) => user.id === parseInt(userid))[0]

    if (!mylist) {
        return res.status(400).json({
            error: "Usuário não encontrado"
        })
    }
    const index = usersList.indexOf(mylist)

    usersList[index].nome = nome
    usersList[index].idade = idade
    usersList[index].cpf = cpf

    const updated = usersList[index];
    return res.status(200).json({
        message:`Dados atualizados: ${updated.nome}, ${updated.idade}, ${updated.cpf} `
    })

})

// Deletar usuário.
app.delete("/users/:id", function (req, res) {

    const userid = req.params.id
    const mylist = usersList.filter((user) => user.id == userid)[0]

    if (!mylist) {
        return res.status(404).json({
            error: "usuario não encontrado"
        })
    }

    const index = usersList.indexOf(mylist)
    usersList.splice(index, 1)

    return res.status(200).json({
        message: "usuário removido com sucesso"
    })
})





app.listen(3000, function(){
    console.log("meu servidor está rodando")
})