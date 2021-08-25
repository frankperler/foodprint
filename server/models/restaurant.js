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
      defaultValue: ["Bio"],
    },
    rest_address: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: ""
    },
    rest_city: {
      type: DataTypes.STRING,
      allowNull: false,
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
      defaultValue: [
        "Monday: 7:30 AM – 7:00 PM",
        "Tuesday: 7:30 AM – 7:00 PM",
        "Wednesday: 7:30 AM – 7:00 PM",
        "Thursday: 7:30 AM – 7:00 PM",
        "Friday: 7:30 AM – 7:00 PM",
        "Saturday: 9:00 AM – 7:00 PM",
        "Sunday: 10:00 AM – 6:00 PM"
      ],
    },
    rest_price_level: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 2.5,
    },
    rest_meal_type: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: ['Lunch'],
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
      through: "Join_Res_Sups",
    })

    // association to suppliers
  }
  
  return Restaurant;
}