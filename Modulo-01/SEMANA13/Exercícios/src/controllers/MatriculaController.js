const Aluno = require("../models/Aluno")
const Matricula = require("../models/Matricula")
const Curso = require("../models/Curso")


class MatriculaController {

    async cadastrar(req, res) {
        try {
            const curso_id = req.body.curso_id
            const aluno_id = req.body.aluno_id

            if(!curso_id || !aluno_id) {
                return res.status(400).json({
                    message: 'O ID do aluno e do curso são obrigatórios'
                })
            }

            // Verificar se existe o aluno no banco de dados.
            const aluno = await Aluno.findByPk(aluno_id)
            if(!aluno) return res.status(404).json({
                message: 'O aluno não existe'
            })


            // Verifica se o id do curso existe.
            const curso = await Curso.findByPk(curso_id)
            if(!curso) return res.status(404).json({mensagem: 'O curso não existe' })

            
            // Verificar se já existe um mesmo curso para o mesmo aluno.
            const matriculaExistente = await Matricula.findOne({
                where: {
                    curso_id: curso_id,
                    aluno_id: aluno_id
                }
            })
            
            if (matriculaExistente) {
                return res.status(409).json({ mensagem: 'Aluno já cadastrado para esse curso' })
            }

            

            const matricula = await Matricula.create({
                curso_id: curso_id,
                aluno_id: aluno_id
            })
            res.status(201).json(matricula)

        }catch (error){
        res.status(500).json({message: 'Não foi possível realizar a matrícula.'})
        }
    }
}


module.exports = new MatriculaController()