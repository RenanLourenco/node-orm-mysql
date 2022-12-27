const Services = require('../services/Services')
const { PessoasServices,MatrículasServices } = require('../services')
const pessoasServices = new PessoasServices()
const matriculasServices = new MatrículasServices()

class MatriculaController{
    //refatorado
    static async restoreEnroll(req,res){
        const { estudante_Id, matriculaId } = req.params
        try {
            await matriculasServices.registerRestoreWhere({id:Number(matriculaId),estudante_id:Number(estudante_Id)})
            return res.status(200).send({mensagem:`A matricula com o Id: ${matriculaId} foi restaurado`})
        } catch (error) {
            return res.status(500).send({message:error.message})
        }
    }

    //refatorado
    static async getOneEnroll(req,res){
        const {estudante_Id,matriculaId} = req.params
        try {
            const enroll = await pessoasServices.getOneEnroll(estudante_Id,matriculaId)
            return res.status(200).json(enroll)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }

    //refatorado
    static async createEnroll(req,res){
        const { estudante_Id } = req.params
        const newEnroll = {...req.body, estudante_id:Number(estudante_Id)}
        try {
            const enroll = await matriculasServices.registerCreate(newEnroll)
            return res.status(200).json(enroll)
        } catch (error) {
            return res.status(500).send({message:error.message})
        }
    }
     //refatorado
     static async updateEnroll(req,res){
        const {estudante_Id,matriculaId} = req.params
        const newInfo = req.body
        try {
            await matriculasServices.registerUpdates(newInfo,{id:Number(matriculaId),estudante_id:Number(estudante_Id)})
            const updatedEnroll = await matriculasServices.getOneRegister(matriculaId)
            return res.status(200).json(updatedEnroll)
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }
    //refatorado
    static async deleteEnroll(req,res){
        const {estudante_Id,matriculaId} = req.params
        try {
            await matriculasServices.registerDelete(matriculaId)
            return res.status(200).send({message:`A matricula com o Id: ${matriculaId} foi deletado do banco de dados`})
        } catch (error) {
            return res.status(400).send({message:error.message})
        }
    }
    //refatorado
    // only get if person is active
    static async getAllEnrolls(req,res){
        const { estudante_Id } = req.params
        try {
            const person = await pessoasServices.getOneRegister(estudante_Id)
            const enrolls = await person.getEnrolledClasses()
            return res.status(200).json(enrolls)
        } catch (error) {
            return res.status(500).json({message:`Verify if the person is active`})
        }
    }
    //refatorado
    static async getEnrollPerClass(req,res){
        const { turmaId } = req.params
        try {
           const allEnrolls = await matriculasServices.registerFindAndCount({turma_id:Number(turmaId), status: 'confirmado'},{limit:20, order:[['estudante_id','DESC']]})
           return res.status(200).json(allEnrolls)
        } catch (error) {
            return res.status(500).send(error.message)
        }
    }
    //refatorado
    static async getFullClasses(req,res){
        const lotacaoTurma = 1
        try{
            const fullClasses = await matriculasServices.getFullClasses({status:'confirmado'},{attributes:'turma_id',group:'turma_id',having:`count(turma_id) >= ${lotacaoTurma}`})
            return res.status(200).json(fullClasses)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = MatriculaController