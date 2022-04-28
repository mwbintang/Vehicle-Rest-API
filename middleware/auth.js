const { verifyToken } = require("../helper/jwt")
const {User} = require('../models')
async function isLogin(req, res, next) {
    try {
        const {access_token} = req.headers
        if(!access_token){
            throw({name:"Please Login First"})
        }
        const payload = verifyToken(access_token)
        const user = await User.findByPk(payload.id)
        if(!user){
            throw({name:"User Not Found"})
        }
        next()
    } catch (error) {
        next(error)
    }
}

async function isAdmin(req, res, next) {
    try {
        const {access_token} = req.headers
        if(!access_token){
            throw({name:"Please Login First"})
        }
        const payload = verifyToken(access_token)
        const user = await User.findByPk(payload.id)
        if(!user){
            throw({name:"User Not Found"})
        }
        if(!user.is_admin){
            throw({name:"You're Not Admin"})
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {isLogin, isAdmin}