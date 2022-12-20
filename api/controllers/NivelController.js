const database = require('../models')
class NivelController {
    static async getAllLevels(req,res){
        try {
            const AllNíveis = await database.Níveis.findAll()
            return res.status(200).json(AllNíveis)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async getOneLevel(req,res){
        const { id } = req.params
        try {
            const Level = await database.Níveis.findOne( { where :{id:Number(id)}})
            return res.status(200).json(Level)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async postLevel(req,res){
        const level = req.body
        try {
            const newLevel = await database.Níveis.create(level)
            return res.status(201).json(newLevel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async updateLevel(req,res){
        const { id } = req.params
        const newInfo = req.body
        try {
            await database.Níveis.update(newInfo, {where:{id:Number(id)}})
            return res.status(200).send({message:`O Nível ${newInfo.descr_nivel} foi atualizado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async deleteLevel(req,res){
        const { id } = req.params
        try {
            await database.Níveis.destroy({where:{id:Number(id)}})
            return res.status(200).send({message:`O Nível de Id: ${id} foi deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}
module.exports = NivelController