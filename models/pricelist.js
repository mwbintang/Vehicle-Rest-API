'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PriceList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PriceList.init({
    code: DataTypes.STRING,
    price: DataTypes.INTEGER,
    year_id: DataTypes.INTEGER,
    model_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PriceList',
  });
  return PriceList;
};