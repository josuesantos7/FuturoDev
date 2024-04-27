const { Router, query } = require('express') // 

const { sign } = require('jsonwebtoken')
const LoginController = require('../controllers/LoginController')

const loginRoutes = new Router()

loginRoutes.post('/', LoginController.login)




module.exports = loginRoutes