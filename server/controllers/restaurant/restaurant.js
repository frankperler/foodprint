'use strict';

const { Sequelize } = require('../../models/index');
const Op = Sequelize.Op;
const db = require('../../models/index');

exports.claimSupplier = async (req, res) => {
  try {
    // extract restaurant's id from req.body
    // const restId = req.body.rest_id;

    //Check if supplier exists in our DB (search by name?)
    const supplier = await db.Supplier.findOne({
      where: {
        sup_name: req.body.sup_name
      },
      include: db.Restaurant
    })

      // create relation between restaurant and supplier if it doesnt already exist

    if (!supplier.Restaurants.find(restaurant => {
      return restaurant.id === req.body.rest_id
    })) {
      // const relation = await db.Join_Res_Sup.create({
      //   SupplierId: supplier.dataValues.id,
      //   RestaurantId: req.body.rest_id
      // })
      const restaurant = await db.Restaurant.findOne({
        where: {
          id: req.body.rest_id
        }
      })
      await supplier.addRestaurant(restaurant)
      await restaurant.addSupplier(supplier)
      
      res.send(supplier)
    }
    else {
      res.send('Error! You are already associated to this supplier.')
    }

  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}

exports.getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await db.Restaurant.findAll()
    res.send(restaurants)
  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}

exports.filterSuppliers = async (req, res) => {
  try {

    const { eco_score, bio } = req.body
    // food_type 

    let where = {
      sup_eco_score: {
        [Op.gte]: eco_score,
      },
      // sup_green_tech: {
      //   [Op.includes]: "Organic"
      // },
    }
    if (bio) {
      where['sup_greenTech'] = { [Op.contains]: ["Organic"] }
    }

    const suppliers = await db.Supplier.findAll({
      where,
    })
    // eco score is a number btwn 1 and 5
    // bio is T/F
    // food type is an array of foods [potatoes, tomatoes, ...]
    res.send(suppliers);
  }
  catch (e) {
    console.log(e);
    res.status = 500;
  }
}