'use strict';

module.exports = (sequelize, DataTypes) => {
  const User =sequelize.define('User', {
  // user_id: {
  //   type: DataTypes.STRING,
  //   allowNull: false,
  // },
  user_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_picture: {
    type: DataTypes.STRING,
    allowNull: true,
  }
})

User.associate = (models) => {
  
  User.belongsTo(models.Login);

  User.hasMany(models.Restaurant);
}

return User;
}