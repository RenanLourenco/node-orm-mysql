// const database = require('../models')

const Services = require('../services/Services')
const niveisServices = new Services('Níveis')

class NivelController {
    //refatorado
    static async getAllLevels(req,res){
        try {
            const AllNíveis = await niveisServices.getAllRegisters()
            return res.status(200).json(AllNíveis)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //refatorado
    static async getOneLevel(req,res){
        const { id } = req.params
        try {
            const Level = await niveisServices.getOneRegister(id)
            return res.status(200).json(Level)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //refatorado
    static async postLevel(req,res){
        const level = req.body
        try {
            const newLevel = await niveisServices.registerCreate(level)
            return res.status(201).json(newLevel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //refatorado
    static async updateLevel(req,res){
        const { id } = req.params
        const newInfo = req.body
        try {
            await niveisServices.registerUpdate(newInfo,id)
            return res.status(200).send({message:`O Nível ${newInfo.descr_nivel} foi atualizado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //refatorado
    static async restoreLevel(req,res){
        const { id } = req.params
        try {
            await niveisServices.registerRestore(id)
            const restore = await niveisServices.getOneRegister(id)
            return res.status(200).send({message:`O Nível ${restore.descr_nivel} foi restaurado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //refatorado
    static async deleteLevel(req,res){
        const { id } = req.params
        try {
            await niveisServices.registerDelete(id)
            return res.status(200).send({message:`O Nível de Id: ${id} foi deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}
module.exports = NivelController