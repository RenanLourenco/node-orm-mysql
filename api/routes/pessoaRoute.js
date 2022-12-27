const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')
const MatrículaController = require('../controllers/MatrículaController')

const router = Router()

router.get('/people', PessoaController.getAllActivePeople)
router.get('/people/all',PessoaController.getAllPeople)
router.get('/people/:id',PessoaController.getOnePerson)
router.post('/people',PessoaController.createPerson)
router.post('/people/:estudante_Id/cancel',PessoaController.cancelPerson)
router.post('/people/:id/restore',PessoaController.restorePerson)
router.put('/people/:id',PessoaController.updatePerson)
router.delete('/people/:id',PessoaController.deletePerson)

//Matriculas
router.get('/people/matriculas/lotadas',MatrículaController.getFullClasses)
router.get('/people/:estudante_Id/matriculas',MatrículaController.getAllEnrolls)
router.get('/people/matricula/:turmaId/confirmadas',MatrículaController.getEnrollPerClass)
router.get('/people/:estudante_Id/matriculas/:matriculaId',MatrículaController.getOneEnroll)
router.post('/people/:estudante_Id/matriculas',MatrículaController.createEnroll)
router.post('/people/:estudante_Id/matriculas/:matriculaId',MatrículaController.restoreEnroll)
router.put('/people/:estudante_Id/matriculas/:matriculaId',MatrículaController.updateEnroll)
router.delete('/people/:estudante_Id/matriculas/:matriculaId',MatrículaController.deleteEnroll)



module.exports = router