'use strict';
module.exports = (sequelize, DataTypes) => {
  const Níveis = sequelize.define('Níveis', {
    descr_nivel: DataTypes.STRING
  }, {});
  Níveis.associate = function(models) {
    // associations can be defined here
    Níveis.hasMany(models.Turmas, {
      foreignKey: 'nivel_id'
    })
  };
  return Níveis;
};