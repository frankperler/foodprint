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
      defaultValue: 'http://www.google.com',
    },
    sup_eco_score: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 3.0,
    },
    sup_description: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: 'You have not provided a description yet...'
    },
    sup_picture: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://source.unsplash.com/IQVFVH0ajag?1600x900'
    },
    sup_greenTech: {
      type: DataTypes.ARRAY() , // CAREFUL HERE
      allowNull: true,
      defaultValue: [{
        "Plastic_Free": true,
        "Organic": true,
        "Water_Recycling": true,
        "Biofuels": true,
        "No_Pesticides": true,
        "Biodynamic": true,
        "Non_GMO": true,
        "No_Growth_Hormones": true,
      }]
    },
    sup_energy: {
      type: DataTypes.ARRAY(DataTypes.STRING) ,
      allowNull: true,
      defaultValue: [
        'Solar-powered'
      ]
    },
    sup_vehicles: {
      type: DataTypes.TEXT,
      allowNull: true,
      dafaultValue: 'Diesel'
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