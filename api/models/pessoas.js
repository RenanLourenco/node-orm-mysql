'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: {
      type:DataTypes.STRING,
      validate:{
        functionValidate: function(data){
          if(data.length < 3) throw new Error('Name need to have more than 3 caracters')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:'Dado do tipo e-mail inválido'
        }
      }
    },
    role: DataTypes.STRING
  }, {paranoid:true,
      defaultScope:{
        where:{ ativo: true }
      }, 
      scopes:{
        todos:{where:{}}
      }
    });
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    })
    Pessoas.hasMany(models.Matrículas,{
      foreignKey:'estudante_id',
      scope:{ status: 'confirmado' },
      as: 'enrolledClasses'
    })
  };
  return Pessoas;
};

