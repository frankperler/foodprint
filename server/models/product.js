'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {

    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_CO2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0,
    },
    product_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Product.associate = (models) => {
    Product.hasMany(models.Production, {
      foreignKey: 'ProductionId'
    });
  }

  return Product;
}