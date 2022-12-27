const Services = require('./Services')
const database = require('../models')
const Sequelize = require('sequelize')

class MatrículasServices extends Services {
    constructor(){
        super('Matrículas')
    }
    async getFullClasses(where = {},options = {}){
        return database[this.modelName].findAndCountAll({
            where:{...where},
            attributes:[`${options.attributes}`],
            group: [`${options.group}`],
            having: Sequelize.literal(`${options.having}`)
        })
    }
}

module.exports = MatrículasServices