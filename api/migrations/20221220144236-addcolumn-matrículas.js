'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Matrículas', 'deletedAt',{
        allowNull: true,
        type: Sequelize.DATE
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Matrículas','deletedAt');
  }
};