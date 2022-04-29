'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VehicleType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      VehicleType.belongsTo(models.VehicleBrand, {foreignKey:"brand_id"})
    }
  }
  VehicleType.init({
    name: DataTypes.STRING,
    brand_id: {
      type:DataTypes.INTEGER,
      references: {
        model: 'VehicleBrands',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'VehicleType',
  });
  return VehicleType;
};