'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('User', {
  user_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  // login: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // }

})