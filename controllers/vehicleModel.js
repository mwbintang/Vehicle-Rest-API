const {VehicleModel} = require('../models')

class Controller{
    static async getAllModel(req, res, next){
        try {
            const allModel = await VehicleModel.findAll()
            res.status(200).json(allModel)            
        } catch (error) {
            next(error)
        }
    }

    static async getModelById(req, res, next){
        try {
            const {id} = req.params
            const modelById = await VehicleModel.findByPk(id)
            if(!modelById){
                throw({name:"Data Not Found"})
            }
            res.status(200).json(modelById)            
        } catch (error) {
            next(error)
        }
    }

    static async addModel(req, res, next){
        try {
            const {name, type_id} = req.body
            const newModel = await VehicleModel.create({name, type_id})
            res.status(201).json(newModel)            
        } catch (error) {
            next(error)
        }
    }

    static async editModel(req, res, next){
        try {
            const {name, type_id} = req.body
            const {id} = req.params
            const modelById = await VehicleModel.findByPk(id)
            if(!modelById){
                throw({name:"Data Not Found"})
            }
            const modelByIdUpdate = await modelById.update({name, type_id})
            res.status(200).json(modelByIdUpdate)            
        } catch (error) {
            next(error)
        }
    }

    static async deleteModel(req, res, next){
        try {
            const {id} = req.params
            const modelById = await VehicleModel.findByPk(id)
            if(!modelById){
                throw({name:"Data Not Found"})
            }
            await modelById.destroy()
            res.status(200).json({msg:"Success Delete"})            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller