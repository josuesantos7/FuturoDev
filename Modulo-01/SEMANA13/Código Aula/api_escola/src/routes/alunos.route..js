const { Router } = require('express') // 
const Aluno = require('../models/Aluno')

const { auth } = require('../middleware/auth')
const AlunoController = require('../controllers/AlunoController')

const alunoRoutes = new Router()

alunoRoutes.post('/', AlunoController.cadastrar)

alunoRoutes.get('/', AlunoController.listar) // adicionar o auth depois.

alunoRoutes.get('/:id', AlunoController.listarUm)  // adicionar o auth depois.

module.exports = alunoRoutes