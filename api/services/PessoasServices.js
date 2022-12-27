const Services = require('./Services')
const database = require('../models')
const Sequelize = require('sequelize')



class PessoasServices extends Services {
    constructor(){
        super('Pessoas')
        this.matrículas = new Services('Matrículas')
    }
    //Metodos especificos 
    async getActiveRegisters(where = {}){
        return database[this.modelName].findAll({where: {...where}})
    }

    async getAllRegisters(where = {}){
        return database[this.modelName].scope('todos').findAll({where:{...where}})
    }
    
    async cancelPersonAndEnroll(estudante_Id){
        return database.sequelize.transaction(async transacao =>{
            await super.registerUpdate({ativo:false},estudante_Id,{transaction:transacao})
            await this.matrículas.registerUpdates({status:'cancelado'},{estudante_Id:estudante_Id},{transaction:transacao})
        })
    }
    async restoreEnroll(estudante_Id,matriculaId){
        return await database[this.matrículas].restore({where:{id:Number(matriculaId),estudante_id:Number(estudante_Id)}})
    }
    async getOneEnroll(estudante_Id,matriculaId){
        return await database.Matrículas.findOne({where:{id:Number(matriculaId), estudante_Id:Number(estudante_Id)}})
    }
}

module.exports = PessoasServices