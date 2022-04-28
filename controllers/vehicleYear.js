const {VehicleYear} = require('../models')

class Controller{
    static async getAllYear(req, res, next){
        try {
            const allYear = await VehicleYear.findAll()
            res.status(200).json(allYear)            
        } catch (error) {
            next(error)
        }
    }

    static async getYearById(req, res, next){
        try {
            const {id} = req.params
            const YearById = await VehicleYear.findByPk(id)
            if(!YearById){
                throw({name:"Data Not Found"})
            }
            res.status(200).json(YearById)            
        } catch (error) {
            next(error)
        }
    }

    static async addYear(req, res, next){
        try {
            const {name} = req.body
            const newYear = await VehicleYear.create({name})
            res.status(201).json(newYear)            
        } catch (error) {
            next(error)
        }
    }

    static async editYear(req, res, next){
        try {
            const {name} = req.body
            const {id} = req.params
            const YearById = await VehicleYear.findByPk(id)
            if(!YearById){
                throw({name:"Data Not Found"})
            }
            const YearByIdUpdate = await YearById.update({name})
            res.status(200).json(YearByIdUpdate)            
        } catch (error) {
            next(error)
        }
    }

    static async deleteYear(req, res, next){
        try {
            const {id} = req.params
            const YearById = await VehicleYear.findByPk(id)
            if(!YearById){
                throw({name:"Data Not Found"})
            }
            await YearById.destroy()
            res.status(200).json({msg:"Success Delete"})            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller