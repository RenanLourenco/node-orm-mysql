const database = require('../models')
const Sequelize = require('sequelize')
const { PessoasServices,MatrículasServices } = require('../services')
const pessoasServices = new PessoasServices()
const matriculasServices = new MatrículasServices()

class PersonController{
    //refatorado
    static async getAllActivePeople(req,res){
        try {
            const allPeople = await pessoasServices.getActiveRegisters()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
        
    }
    //refatorado
    static async getAllPeople(req,res){
        try {
            const allPeople = await pessoasServices.getAllRegisters()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
        
    }
    //refatorado
    //just get if the person is active
    static async getOnePerson(req,res){
        const {id} = req.params
        try {
            console.log(id)
            const UmaPessoa = await pessoasServices.getOneRegister(id);
            return res.status(200).json(UmaPessoa)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }
    //refatorado
    static async restorePerson(req,res){
        const { id } = req.params
        try {
            await pessoasServices.registerRestore(id)
            return res.status(200).send({message:`O Registro da Pessoa com o Id: ${id} foi restaurado`})
        } catch (error) {
            return res.status(500).send({message:error.message})
        }
    }

    
    //refatorado
    static async createPerson(req,res){
        const newPerson = req.body
        try {
            const newPersonCreated = await pessoasServices.registerCreate(newPerson)
            return res.status(201).json(newPersonCreated)

        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }
   
    //refatorado
    //only update if the person is active
    static async updatePerson(req,res){
        const { id } = req.params
        const newInfo = req.body
        try {
            await pessoasServices.registerUpdate(newInfo,id)
            const updatedPerson = await database.Pessoas.findOne({where:{id:id}})
            return res.status(200).json(updatedPerson)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }
    //refatorado
    static async deletePerson(req,res){
        const { id } = req.params
        try {
            const deletedPerson = await pessoasServices.getOneRegister(id)
            await pessoasServices.registerDelete(id)
            return res.status(200).json(deletedPerson)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }
    
    //refatorado
    static async cancelPerson(req,res){
        const {estudante_Id} = req.params
        try{
            await pessoasServices.cancelPersonAndEnroll(Number(estudante_Id))
            return res.status(200).json({message:`matriculas referente a estudante ${estudante_Id} canceladas`})
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = PersonController