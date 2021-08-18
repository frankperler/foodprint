'use strict';

module.exports = (sequelize, DataTypes) => {
  const JoinResSup = sequelize.define('Join_Res_Sup', {

    SupplierId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    RestaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  })
    return JoinResSup;
}