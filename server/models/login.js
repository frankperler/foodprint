'use-strict';

module.exports = (sequelize, DataTypes) => {
  const Login = sequelize.define('Login', {
    // login_id: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
          isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
})

Login.associate = (models) => {
  Login.belongsTo(models.User, {
    foreignKey: 'UserId'
  });
}

  return Login;
}
