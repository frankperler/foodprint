'use strict';

const { Sequelize } = require('../../models/index');
const Op = Sequelize.Op;
const db = require('../../models/index');


exports.searchRestaurantsByCity = async (req, res) => {
  try {
    const restaurants = await db.Restaurant.findAll({
      where: {
        rest_city: {
          [Op.like]: `%${req.body.rest_city}%`
        }
      }
    })
    res.send(restaurants); 
  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}

exports.searchRestaurantsByName = async (req, res) => {
  try {
    const restaurants = await db.Restaurant.findAll({
      where: {
        rest_name: {
          [Op.like]: `%${req.body.rest_name}%`
        }
      }
    })
    res.send(restaurants); 
  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}

exports.searchSuppliersByCity = async (req, res) => {
  try {
    const suppliers = await db.Supplier.findAll({
      where: {
        sup_city: {
          [Op.like]: `%${req.body.sup_city}%`
        }
      }
    })
    res.send(suppliers); 
  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}

exports.searchSuppliersByName = async (req, res) => {
  try {
    const suppliers = await db.Supplier.findAll({
      where: {
        sup_name: {
          [Op.like]: `%${req.body.sup_name}%`
        }
      },
      include: {
        model: db.Production,
        include: {
          model: db.Product
        }
      }
    })
    res.send(suppliers); 
  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}

