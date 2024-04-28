const { Router } = require('express')
const Aluno = require('../models/Aluno')
const Curso = require('../models/Curso')


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


// ex1
routes.post("/cursos", async(req, res) => {
    try {
        console.log("entramos no try cursos")

        const nome = req.body.nome
        const duracao_horas = req.body.duracao_horas

        if (!nome) {
            return res.status(400).json({ error: "Por favor, digite o nome do curso."})
        }

        if (!duracao_horas) {
            return res.status(400).json({ error: "Por favor, digite a duração em horas do curso."})
        }

        const curso = await Curso.create({
            nome: nome,
            duracao_horas: duracao_horas
        })

        return res.status(201).json({
            curso
        })

    } catch(error) {
        console.log(error.message)
        res.status(500).json({
            message: "Falha no preenchimento dos campos",
            cause: error.message
       }) 
    }
})


// ex2
routes.get("/cursos/listar", async(req, res) => {
    const cursos = await Curso.findAll()
    res.json(cursos)
})

// ex3 
routes.get("/cursos", async(req, res) => {
    try {
        let params = {}

        if (req.query.nome) {
            params = {...params, nome: req.query.nome }
        }
 
        // if (req.query.duracao_horas) {
        //     params = { ...params, duracao_horas: req.query.duracao_horas }
        // }

        const cursos = await Curso.findAll({
            where: params
        })

        res.json(cursos)

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível listar todos os cursos' })
    }
})




// ex4
routes.put("/cursos/:id", async(req, res) => {
    const {id} = req.params

    const curso = await Curso.findByPk(id)

    if (!curso) {
        return res.status(404).json({ message: 'Curso não encontrado' })
    }


    curso.update(req.body)

    await curso.save()

    res.json(curso)
})


// ex5
routes.delete('/cursos/:id', (req,res) => {
    const {id} =  req.params

    Curso.destroy({
        where: {
            id: id
        }
    })
  
    res.status(204).json({})
})

module.exports = routes