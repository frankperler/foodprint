'use strict';

const db = require('../../models/index');

exports.getAll = async (req, res) => {
  try {
    req.body = await db.Restaurant.findAll();
  }
  catch (e) {
    res.status = 500;
  }
} 