'use strict';

const db = require('../../models/index');

exports.searchRestaurantsByCity = async (req, res) => {
  try {
    const restaurants = await db.Restaurant.findAll({
      where: {
        rest_city: req.body.rest_city
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
        sup_city: req.body.sup_city
      }
    })
    res.send(suppliers); 
  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}

