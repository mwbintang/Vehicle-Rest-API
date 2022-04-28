'use strict';
const {hash} = require('../helper/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:"Status is required"}
      }
    },
    is_admin: {
      type:DataTypes.BOOLEAN,
      allowNull:false,
      validate:{
        notNull:{msg:"Status is required"}
      }
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{msg:"Status is required"}
      }
    }
  }, {
    hooks: {
      beforeCreate: (customer) => {
        customer.password = hash(customer.password);
      },
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};