'use strict';

const db = require('../../models/index');

// helper functions
const createLogin = (req) => {
    return db.Login.create({
      email: req.body.email,
      password: req.body.password,
    });
};

const createUser = (req, login) => {
  return db.User.create({
    user_type: req.body.user_type,
    user_first_name: req.body.user_first_name,
    user_last_name: req.body.user_last_name,
    LoginId: login.id
  });
};

// register as food lover
exports.addFoodLoverUser = async (req, res) => {
  try {
    const login = await createLogin(req)
    const user = await createUser(req, login)
    await login.setUser(user)
    res.send(user)
  }
  catch (e) {
    console.log(e)
    res.status = 500;
  }
}

// register as restaurant user
exports.addRestaurantUser = async (req, res) => {
  try {
    const login = await createLogin(req)
    const user = await createUser(req, login)
    const newRestaurant = await db.Restaurant.create({
      // place_id:
      rest_address: req.body.rest_address,
      // rest_lat: 
      // rest_lng:
      rest_name: req.body.rest_name,
      rest_phone_number: req.body.rest_phone_number,
    });

    await login.setUser(user)
    await user.setRestaurants(newRestaurant)
    res.send({
      user,
      newRestaurant
    })
  }
  catch (e) {
    console.log(e)
    res.status = 500;
  }
}

// register as supplier user
exports.addSupplierUser = async (req, res) => {
  try {
    const login = await createLogin(req)
    const user = await createUser(req, login)
    const newSupplier = await db.Supplier.create({
      sup_address: req.body.sup_address,
      // sup_lat: 
      // sup_lng:
      sup_name: req.body.sup_name,
      sup_phone_number: req.body.sup_phone_number,
    });

    await login.setUser(user)
    await user.setSuppliers(newSupplier)
    res.send({
      user,
      newSupplier
    })
  }
  catch (e) {
    console.log(e)
    res.status = 500;
  }
}



