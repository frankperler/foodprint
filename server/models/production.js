'use-strict';

module.exports = (sequelize, DataTypes) => {

const Production = sequelize.define('Production', {
  
  production_amount: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0,
  },
  production_CO2: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0,
  }
})

Production.associate = (models) => {
  Production.belongsTo(models.Supplier);
  Production.belongsTo(models.Product);

}

return Production;
}