'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  Turmas.associate = function(models) {
    // associations can be defined here
    Turmas.hasMany(models.Matrículas,{
      foreignKey:'turma_id'
    })
    Turmas.belongsTo(models.Pessoas,{
      foreignKey: 'docente_id'
    })
    Turmas.belongsTo(models.Níveis,{
      foreignKey:'nivel_id'
    })
  };
  return Turmas;
};