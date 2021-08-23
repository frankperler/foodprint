'use-strict';
const bcrypt = require("bcrypt");


module.exports = (sequelize, DataTypes) => {
  const Login = sequelize.define('Login', {
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
    }
  }, {
    hooks: {
      beforeCreate: (login) => {
        const salt = bcrypt.genSaltSync(8); 
        login.password = bcrypt.hashSync(login.password, salt);
      }
    }
  }
)
 
  Login.prototype.validatePassword = (plaintextPassword, fetchedPassword) => 
     bcrypt.compareSync(plaintextPassword, fetchedPassword);
  Login.associate = (models) => {
    Login.hasOne(models.User)
  }
  return Login;
}
  