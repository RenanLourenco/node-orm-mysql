const database = require('../models')
const Sequelize = require('sequelize')
const TurmasServices = require('../services/TurmasServices')
const Op = Sequelize.Op
const turmasServices = new TurmasServices()

class TurmaController {
    //refatorado
    static async getAllClasses(req,res){
        const { initial_date, final_date } = req.query
        const where = {}
        initial_date || final_date ? where.data_inicio = {} : null
        initial_date ? where.data_inicio[Op.gte] = initial_date : null
        final_date ? where.data_inicio[Op.lte] = final_date : null
        try {
            const AllClasses = await turmasServices.getAllClassesFilterDate(where)
            return res.status(200).json(AllClasses)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //refatorado
    static async getOneClass(req,res){
        const { id } = req.params
        try {
            const oneClass = await turmasServices.getOneRegister(id)
            return res.status(200).json(oneClass)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //refatorado
    static async postClass(req,res){
        const { id } = req.params
        const newInfo = req.body
        try {
            const newClass = await turmasServices.registerCreate(newInfo)
            return res.status(201).json(newClass)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //refatorado
    static async restoreClass(req,res){
        const { id } = req.params
        try {
            await turmasServices.registerRestore(id)
            return res.status(200).json({mensage:`A turma com o Id: ${id} foi restaurado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    //refatorado
    static async updateClass(req,res){
        const { id } = req.params
        const updatedInfo = req.body
        try {
            await turmasServices.registerUpdate(updatedInfo,id)
            return res.status(200).send({message:`A Turma com o Id: ${id} foi atualizado`})
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
    //refatorado
    static async deleteClass(req,res){
        const { id } = req.params
        try {
            await turmasServices.registerDelete(id)
            return res.status(200).send({message:`A turma com o Id: ${id} foi deletada`})
        } catch (error) {
            return res.status(400).json(error.message)
        }
    }
}
module.exports = TurmaController