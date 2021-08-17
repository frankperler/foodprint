'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};
const user = process.env.USER;
const password = process.env.PASSWORD;

const sequelize = new Sequelize('foodprint_dev', `${user}`, `${password}`, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
});

const files = fs.readdirSync(__dirname);

for (let file of files) {
  if (file !== 'index.js') {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  }
}

// for (const model in db) {
//   if (db[model].associate) db[model].associate(db);
// }

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
