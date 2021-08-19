'use strict';

module.exports = (sequelize, DataTypes) => {
  const Supplier = sequelize.define('Supplier', {

    sup_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sup_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sup_phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sup_lat: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    sup_lng: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    sup_website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sup_eco_score: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    sup_description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    sup_picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sup_greenTech: {
      type: DataTypes.ARRAY(DataTypes.STRING) ,
      allowNull: true,
    },
    sup_energy: {
      type: DataTypes.ARRAY(DataTypes.STRING) ,
      allowNull: true,
    },
    sup_vehicles: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  })

  Supplier.associate = (models) => {
    Supplier.hasMany(models.Production);
    Supplier.belongsTo(models.User);
    Supplier.belongsToMany(models.Restaurant, {
      through: "Join_Res_Sups",
    });
  }

  return Supplier;
}