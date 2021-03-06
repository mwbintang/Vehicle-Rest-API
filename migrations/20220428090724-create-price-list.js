'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PriceLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      year_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'VehicleYears',
          key: 'id'
        },
        onUpdate:"cascade",
        onDelete:"cascade"
      },
      model_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'VehicleModels',
          key: 'id'
        },
        onUpdate:"cascade",
        onDelete:"cascade"
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
    await queryInterface.dropTable('PriceLists');
  }
};