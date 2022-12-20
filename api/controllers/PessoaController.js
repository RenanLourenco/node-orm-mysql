const database = require('../models')

class PersonController{
    static async getAllPeople(req,res){
        try {
            const allPeople = await database.Pessoas.findAll()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
        
    }
    static async getOnePerson(req,res){
        const {id} = req.params
        try {
            const UmaPessoa = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(UmaPessoa)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }
    static async getOneEnroll(req,res){
        const {estudante_Id,matriculaId} = req.params
        try {
            const enroll = await database.Matrículas.findOne({where:{id:Number(matriculaId), estudante_Id:Number(estudante_Id)}})
            return res.status(200).json(enroll)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }
    static async createEnroll(req,res){
        const { estudante_Id } = req.params
        const newEnroll = {...req.body, estudante_id:Number(estudante_Id)}
        try {
            const enroll = await database.Matrículas.create(newEnroll)
            return res.status(200).json(enroll)
        } catch (error) {
            return res.status(500).send({message:error.message})
        }
    }
    static async createPerson(req,res){
        const newPerson = req.body
        try {
            const newPersonCreated = await database.Pessoas.create(newPerson)
            return res.status(201).json(newPersonCreated)

        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }
    static async updateEnroll(req,res){
        const {estudante_Id,matriculaId} = req.params
        const newInfo = req.body
        try {
            await database.Matrículas.update(newInfo,{where:{id:Number(matriculaId),estudante_id:Number(estudante_Id)}})
            const updatedEnroll = await database.Matrículas.findOne({where:{id:Number(matriculaId)}})
            return res.status(200).json(updatedEnroll)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }
    static async deleteEnroll(req,res){
        const {estudante_Id,matriculaId} = req.params
        try {
            await database.Matrículas.destroy({where:{id:Number(matriculaId)}})
            return res.status(200).send({message:`A matricula com o Id: ${matriculaId} foi deletado do banco de dados`})
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }
    static async updatePerson(req,res){
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Pessoas.update(newInfo, { where : {id:Number(id)}})
            const updatedPerson = await database.Pessoas.findOne({where: {id: Number(id)}})
            return res.status(200).json(updatedPerson)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }
    static async deletePerson(req,res){
        const { id } = req.params
        try {
            const deletedPerson = await database.Pessoas.findOne({where: {id:Number(id)}})
            await database.Pessoas.destroy({where :{id:Number(id)}})
            return res.status(200).json(deletedPerson)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }

}

module.exports = PersonController