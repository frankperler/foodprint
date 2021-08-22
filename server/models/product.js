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
    product_picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_type: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  Product.associate = (models) => {
    // Product.belongsTo(models.Supplier);
    Product.hasMany(models.Production)
  }

  return Product;
}