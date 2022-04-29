const {VehicleType} = require('../models')

class Controller{
    static async getAllType(req, res, next){
        try {
            const allType = await VehicleType.findAll()
            res.status(200).json(allType)            
        } catch (error) {
            next(error)
        }
    }

    static async getTypeById(req, res, next){
        try {
            const {id} = req.params
            const typeById = await VehicleType.findByPk(id)
            if(!typeById){
                throw({name:"Data Not Found"})
            }
            res.status(200).json(typeById)            
        } catch (error) {
            next(error)
        }
    }

    static async addType(req, res, next){
        try {
            const {name, brand_id} = req.body
            const newType = await VehicleType.create({name, brand_id})
            res.status(201).json(newType)            
        } catch (error) {
            next(error)
        }
    }

    static async editType(req, res, next){
        try {
            const {name, brand_id} = req.body
            const {id} = req.params
            const TypeById = await VehicleType.findByPk(id)
            if(!TypeById){
                throw({name:"Data Not Found"})
            }
            const typeByIdUpdate = await TypeById.update({name, brand_id})
            res.status(200).json(typeByIdUpdate)            
        } catch (error) {
            next(error)
        }
    }

    static async deleteType(req, res, next){
        try {
            const {id} = req.params
            const typeById = await VehicleType.findByPk(id)
            if(!typeById){
                throw({name:"Data Not Found"})
            }
            await typeById.destroy()
            res.status(200).json({msg:"Success Delete"})            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller