const bodyParser = require('body-parser')
const PersonController = require('../controllers/PessoaController.js')
const pessoas = require('../routes/pessoaRoute.js')
const turmas = require('../routes/turmaRoute')
const niveis = require('../routes/niveisRoute')
module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(turmas)
    app.use(niveis)
}
