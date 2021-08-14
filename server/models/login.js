'use-strict';

module.exports = (sequelize, DataTypes) => sequelize.define('Login', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})
