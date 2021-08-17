'use-strict';

module.exports = (sequelize, DataTypes) => {

const Production = sequelize.define('Production', {
  // production_id: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
  production_amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
  },
  production_CO2: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
  }
})

Production.associate = (models) => {
  Production.belongsTo(models.Product, {
    foreignKey: 'ProductId'
  });
}

return Production;
}