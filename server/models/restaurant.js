'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('Restaurant', {
  rest_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rest_types: {
    type: DataTypes.ARRAY(DataTypes.STRING) , // *** careful with this
    allowNull: false,
  },
  rest_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rest_phone_number: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rest_lat: {
      type: DataTypes.NUMBER,
      allowNull: false,
  },
  rest_lng: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  // opening_hours: {
  //   type: DataTypes.
  // },
  rest_price_level: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  rating: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rest_eco_score: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  rest_description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  rest_picture: {
    type: DataTypes.STRING,
    allowNull: false,
  }
})