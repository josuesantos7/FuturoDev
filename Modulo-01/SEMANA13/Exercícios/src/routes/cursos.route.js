const { Router, query } = require('express')
const Curso = require('../models/Curso')

const { auth } = require('../middleware/auth')
const CursoController = require('../controllers/CursoController')

const cursoRoutes = new Router()

cursoRoutes.post('/', auth, CursoController.cadastrar)

cursoRoutes.get('/', auth,  CursoController.listar)


cursoRoutes.delete('/:id', auth, (req, res) => {
    const { id } = req.params

    Curso.destroy({
        where: {
            id: id
        }
    }) // DELETE cursos from cursos where id = 1

    res.status(204).json({})
})


cursoRoutes.put('/:id', auth, async (req, res) => {
    const { id } = req.params

    const curso = await Curso.findByPk(id)

    if (!curso) {
        return res.status(404).json({ message: 'Curso não encontrado' })
    }

    curso.update(req.body)

    await curso.save()

    res.json(curso)
})

module.exports = cursoRoutes