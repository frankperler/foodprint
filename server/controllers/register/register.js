'use strict';

const fetch = require('cross-fetch');
const db = require('../../models/index');

const baseUrl = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?';
const followUpUrl = 'inputtype=textquery&fields=place_id,name,formatted_address,geometry,price_level,rating,types'
const apiKey = process.env.API_KEY;

// Google API call
async function callApi (address) {
  const res = await fetch(`${baseUrl}input=${address}&${followUpUrl}&key=${apiKey}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
      "Accept": "application/json"
    }
  });
  const restaurant = await res.json();
  return restaurant;
}

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
    const UserId = user.id;
    const apiResponse = await callApi(req.body.rest_address)
    let latitude;
    let longitude;
    if (apiResponse.candidates.length) {
      latitude = apiResponse.candidates[0].geometry.location.lat;
      longitude = apiResponse.candidates[0].geometry.location.lng;
    }

    const newRestaurant = await db.Restaurant.create({
      // place_id:
      rest_address: req.body.rest_address,
      rest_name: req.body.rest_name,
      rest_phone_number: req.body.rest_phone_number,
      rest_city: req.body.rest_city,
      rest_lat: latitude,
      rest_lng: longitude,
      UserId
    });

    await login.setUser(user)
    await user.setRestaurants(newRestaurant)
    // ----------
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
    const UserId = user.id;
    const apiResponse = await callApi(req.body.rest_address)
    let latitude;
    let longitude;
    if (apiResponse.candidates.length) {
      latitude = apiResponse.candidates[0].geometry.location.lat;
      longitude = apiResponse.candidates[0].geometry.location.lng;
    }

    const newSupplier = await db.Supplier.create({
      sup_address: req.body.sup_address,
      sup_lat: latitude,
      sup_lng: longitude,
      sup_name: req.body.sup_name,
      sup_phone_number: req.body.sup_phone_number,
      UserId
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



