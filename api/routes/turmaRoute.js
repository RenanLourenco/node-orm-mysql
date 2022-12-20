const { Router } = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router.get('/class',TurmaController.getAllClasses)
router.get('/class/:id',TurmaController.getOneClass)
router.post('/class',TurmaController.postClass)
router.put('/class/:id',TurmaController.updateClass)
router.delete('/class/:id',TurmaController.deleteClass)


module.exports = router