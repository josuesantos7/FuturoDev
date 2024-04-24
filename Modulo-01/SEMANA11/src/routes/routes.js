const { Router } = require('express')
const Aluno = require('../models/Aluno')

const routes = new Router()

// Para criar uma rota:
// 1. Tipo.
// 2. Path.
// 3. implementação - oque a rota vai fazer.

routes.get("/bem_vindo", (req, res) => {
    res.json({name: "Bem-vindo"})
})

// Cadastrar aluno:
routes.post("/alunos", async(req, res) => {

    const nome = req.body.nome 
    const data_nascimento = req.body.data_nascimento
    const celular = req.body.celular

    const aluno = await Aluno.create({
        nome: nome,
        data_nascimento: data_nascimento,
        celular: celular
    })
    res.json(aluno)
})


routes.get("/alunos", async(req, res) =>{
    const alunos = await Aluno.findAll()
    res.json(alunos)
})



module.exports = routes