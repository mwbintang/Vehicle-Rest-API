const { User } = require('../models')
const {compare} = require('../helper/bcrypt')
const {signToken} = require('../helper/jwt')
class Controller {
    static async register(req, res, next) {
        try {
            const { name, password, is_admin } = req.body
            const newUser = await User.create({ name, password, is_admin })
            res.status(201).json(newUser)
        } catch (error) {
            next(error)
        }

    }
    static async login(req, res, next) {
        try {
            const { name, password } = req.body;

            if (!name || !password){
                throw { name: "email/password is required" };
            } 

            let userByName = await User.findOne({
                where: {
                    name,
                },
            });

            if (!userByName) {
                throw {
                    name: "User Not Found",
                };
            }

            const comparePassword = compare(password, userByName.password);

            if (!comparePassword) {
                throw {
                    name: "email/password not valid",
                };
            }

            const payload = {
                id: userByName.id,
                name: userByName.email,
            };

            const access_token = signToken(payload);

            res.status(200).json({ access_token });
        } catch (error) {
            next(error)
        }
    }
}

module.exports = Controller