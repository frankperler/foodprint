'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('Supplier', {
    sup_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // sup_products: {
    //   type: DataTypes.ARRAY(DataTypes.STRING) , // *** careful with this
    //   allowNull: false,
    // },
    sup_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sup_phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sup_lat: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    sup_lng: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    // opening_hours: {
    //   type: DataTypes.
    // },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sup_eco_score: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    sup_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sup_picture: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  })