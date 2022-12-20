const { Router } = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/levels',NivelController.getAllLevels)
router.get('/levels/:id',NivelController.getOneLevel)
router.post('/levels',NivelController.postLevel)
router.put('/levels/:id',NivelController.updateLevel)
router.delete('/levels/:id',NivelController.deleteLevel)

module.exports = router