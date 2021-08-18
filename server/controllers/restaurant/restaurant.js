'use strict';

const db = require('../../models/index');

exports.getAll = async (req, res) => {
  try {
    const newRestaurant = await db.Restaurant.create({
      // place_id:
      rest_address: req.body.rest_address,
      // rest_lat: 
      // rest_lng:
      rest_name: req.body.rest_name,
      rest_phone_number: req.body.rest_phone_number,
    });
    
  }
  catch (e) {
    res.status = 500;
  }
} 