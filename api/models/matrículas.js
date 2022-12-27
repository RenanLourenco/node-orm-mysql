'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matrículas = sequelize.define('Matrículas', {
    status: DataTypes.STRING
  }, {paranoid: true});
  Matrículas.associate = function(models) {
    // associations can be defined here
    Matrículas.belongsTo(models.Pessoas,{
      foreignKey: 'estudante_id'
    })
    Matrículas.belongsTo(models.Turmas,{
      foreignKey:'turma_id'
    })
  };
  return Matrículas;
};