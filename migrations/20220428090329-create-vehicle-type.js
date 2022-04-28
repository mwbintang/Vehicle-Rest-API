'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('VehicleTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      brand_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'VehicleBrands',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('VehicleTypes');
  }
};