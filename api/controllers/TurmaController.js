const database = require('../models')
class TurmaController {
    static async getAllClasses(req,res){
        try {
            const AllClasses = await database.Turmas.findAll()
            return res.status(200).json(AllClasses)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async getOneClass(req,res){
        const { id } = req.params
        try {
            const oneClass = await database.Turmas.findOne({where:{id:Number(id)}})
            return res.status(200).json(oneClass)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async postClass(req,res){
        const { id } = req.params
        const newInfo = req.body
        try {
            const newClass = await database.Turmas.create(newInfo)
            return res.status(201).json(newClass)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async updateClass(req,res){
        const { id } = req.params
        const updatedInfo = req.body
        try {
            await database.Turmas.update(updatedInfo,{where:{id:Number(id)}})
            return res.status(200).send({message:`A Turma com o Id: ${id} foi atualizado`})
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    static async deleteClass(req,res){
        const { id } = req.params
        try {
            await database.Turmas.destroy({where:{id:Number(id)}})
            return res.status(200).send({message:`A turma com o Id: ${id} foi deletada`})
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}
module.exports = TurmaController