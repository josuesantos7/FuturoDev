const { Router } = require('express') // 
// adicionar o auth
// const { auth } = require('../middleware/auth')
const MatriculaController = require('../controllers/MatriculaController')

const matriculaRoutes = new Router()

matriculaRoutes.post('/', MatriculaController.cadastrar) // add o auth depois.


module.exports = matriculaRoutes