const {VehicleBrand, VehicleType} = require('../models')

class Controller{
    static async getAllBrand(req, res, next){
        try {
            const allBrand = await VehicleBrand.findAll({include:{model:VehicleType}})
            res.status(200).json(allBrand)            
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async getBrandById(req, res, next){
        try {
            const {id} = req.params
            const brandById = await VehicleBrand.findByPk(id)
            if(!brandById){
                throw({name:"Data Not Found"})
            }
            res.status(200).json(brandById)            
        } catch (error) {
            next(error)
        }
    }

    static async addBrand(req, res, next){
        try {
            const {name} = req.body
            const newBrand = await VehicleBrand.create({name})
            res.status(201).json(newBrand)            
        } catch (error) {
            next(error)
        }
    }

    static async editBrand(req, res, next){
        try {
            const {name} = req.body
            const {id} = req.params
            const brandById = await VehicleBrand.findByPk(id)
            if(!brandById){
                throw({name:"Data Not Found"})
            }
            const brandByIdUpdate = await brandById.update({name})
            res.status(200).json(brandByIdUpdate)            
        } catch (error) {
            next(error)
        }
    }

    static async deleteBrand(req, res, next){
        try {
            const {id} = req.params
            const brandById = await VehicleBrand.findByPk(id)
            if(!brandById){
                throw({name:"Data Not Found"})
            }
            await brandById.destroy()
            res.status(200).json({msg:"Success Delete"})            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller