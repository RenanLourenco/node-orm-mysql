const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/people', PessoaController.getAllPeople)
router.get('/people/:id',PessoaController.getOnePerson)
router.post('/people',PessoaController.createPerson)
router.put('/people/:id',PessoaController.updatePerson)
router.delete('/people/:id',PessoaController.deletePerson)
router.get('/people/:estudante_Id/matriculas/:matriculaId',PessoaController.getOneEnroll)
router.post('/people/:estudante_Id/matriculas',PessoaController.createEnroll)
router.put('/people/:estudante_Id/matriculas/:matriculaId',PessoaController.updateEnroll)
router.delete('/people/:estudante_Id/matriculas/:matriculaId',PessoaController.deleteEnroll)
module.exports = router