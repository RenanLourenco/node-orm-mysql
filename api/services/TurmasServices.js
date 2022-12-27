const Services = require('./Services')
const database = require('../models')
const Sequelize = require('sequelize')

class TurmasServices extends Services {
    constructor(){
        super('Turmas')
    }
    async getAllClassesFilterDate(where = {}){
        return database[this.modelName].findAll({where:{...where}})
    }
}

module.exports = TurmasServices