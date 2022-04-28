const {PriceList} = require('../models')

class Controller{
    static async getAllPrice(req, res, next){
        try {
            const allPrice = await PriceList.findAll()
            res.status(200).json(allPrice)            
        } catch (error) {
            next(error)
        }
    }

    static async getPriceById(req, res, next){
        try {
            const {id} = req.params
            const PriceById = await PriceList.findByPk(id)
            if(!PriceById){
                throw({name:"Data Not Found"})
            }
            res.status(200).json(PriceById)            
        } catch (error) {
            next(error)
        }
    }

    static async addPrice(req, res, next){
        try {
            const {name} = req.body
            const newPrice = await PriceList.create({name})
            res.status(201).json(newPrice)            
        } catch (error) {
            next(error)
        }
    }

    static async editPrice(req, res, next){
        try {
            const {name} = req.body
            const {id} = req.params
            const PriceById = await PriceList.findByPk(id)
            if(!PriceById){
                throw({name:"Data Not Found"})
            }
            const PriceByIdUpdate = await PriceById.update({name})
            res.status(200).json(PriceByIdUpdate)            
        } catch (error) {
            next(error)
        }
    }

    static async deletePrice(req, res, next){
        try {
            const {id} = req.params
            const PriceById = await PriceList.findByPk(id)
            if(!PriceById){
                throw({name:"Data Not Found"})
            }
            await PriceById.destroy()
            res.status(200).json({msg:"Success Delete"})            
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller