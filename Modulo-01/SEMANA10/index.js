const express = require("express")

const app = express();

app.use(express.json());

const logHoraMiddleware = (req, res, next) => {
    const horaAtual = new Date().toISOString();
    console.log(
      `[${horaAtual}] Nova solicitação recebida para: ${req.method} ${req.originalUrl}`
      );
    next();
};


// minha Homepage
app.get("/", logHoraMiddleware, function(req, res){
    res.send("My Workspace")
})


// minha lista
let ListaProdutos = [];

// adicionar um novo produto:
app.post("/adicionarproduto", logHoraMiddleware, function(req, res){
    const {id, nomeProduto, valor } = req.body

    let NovoProduto = {id, nomeProduto, valor}

    if (NovoProduto){
        ListaProdutos.push(NovoProduto)
        return res.status(201).json({
            message:`Produto adicionado com sucesso: ${id}, ${nomeProduto}, ${valor}`
        })
    }
    return res.status(400).json({
        message: "Bad request"
    })  
})


app.get("/listarprodutos", logHoraMiddleware, function(req, res){
    res.json(ListaProdutos)
})


app.put("/atualizarproduto/:id", logHoraMiddleware, function(req, res){
    const {id, nomeProduto, valor} = req.body
    const produtoId = parseInt(req.params.id)
    const ListaFiltrada = ListaProdutos.filter((produto) => produto.id === parseInt(produtoId))[0]

    if (!ListaFiltrada) {
        return res.status(400).json({
            error: "Produto não encontrado"
        })
    }
    const index = ListaProdutos.indexOf(ListaFiltrada)


    ListaProdutos[index].id = id
    ListaProdutos[index].nomeProduto = nomeProduto
    ListaProdutos[index].valor = valor


    const updated = ListaProdutos[index];
    return res.status(200).json({
        message:`Dados atualizados: ${updated.id}, ${updated.nomeProduto}, ${updated.valor} `
    })
})


app.delete("/produto/:id", logHoraMiddleware, function(req, res){
    const produtoId = req.params.id
    const ListaFiltrada = ListaProdutos.filter((produto) => produto.id === parseInt(produtoId))[0]

    if (!ListaFiltrada){
        return res.status(400).json({
            error: "Produto não encontrado"
        })
    }
    const index = ListaProdutos.indexOf(ListaFiltrada)
    ListaProdutos.splice(index,1)

    return res.status(200).json({
        message: "Produto removido com sucesso"
    })
})



app.listen(3002, function(){
    console.log("Servidor rodando")
})
