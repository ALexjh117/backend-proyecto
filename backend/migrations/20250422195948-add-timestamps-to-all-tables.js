'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Obtener todas las tablas de la base de datos
    const tables = await queryInterface.showAllTables();

    // Iterar sobre cada tabla y agregar las columnas 'createdAt' y 'updatedAt'
    for (const table of tables) {
      await queryInterface.addColumn(table, 'createdAt', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      });

      await queryInterface.addColumn(table, 'updatedAt', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      });
    }
  },

  async down (queryInterface, Sequelize) {
    // Obtener todas las tablas de la base de datos
    const tables = await queryInterface.showAllTables();

    // Iterar sobre cada tabla y eliminar las columnas 'createdAt' y 'updatedAt'
    for (const table of tables) {
      await queryInterface.removeColumn(table, 'createdAt');
      await queryInterface.removeColumn(table, 'updatedAt');
    }
  }
};
