'use strict';

module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
  
    place_id: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "no id"
    },
    rest_name: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: ""
    },
    rest_types: {
      type: DataTypes.ARRAY(DataTypes.STRING) , // *** careful with this
      allowNull: true,
      defaultValue: [],
    },
    rest_address: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: ""
    },
    rest_phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },
    rest_lat: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    rest_lng: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    opening_hours: { // 2nd request
      type: DataTypes.ARRAY(DataTypes.STRING), // give it a default value
      allowNull: true,
    },
    rest_price_level: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    rest_meal_type: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    rest_rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    rest_website: { // 2nd request
      type: DataTypes.STRING,
      allowNull: true,
    },
    rest_eco_score: { // mocked
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    rest_description: { // mocked
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rest_picture: { // mocked
      type: DataTypes.STRING,
      allowNull: true,
    }
  })

  Restaurant.associate = (models) => {
    
    Restaurant.belongsTo(models.User);
    Restaurant.belongsToMany(models.Supplier, {
      through: "Join_Res_Sups"
    })

    // association to suppliers
  }
  
  return Restaurant;
}