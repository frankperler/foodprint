'use strict';

// const Router = require('koa-router');
const express = require('express')
const router = express.Router()

const user = require('./controllers/register/register.js');
const restaurant = require('./controllers/restaurant/restaurant.js');
// const supplier = require('./controllers/supplier/supplier.js');
// const production  = require('./controllers/production/production.js');


router.post('/register', user.addUser);
router.post('/login', user.getUser);

// router.put('/users/:id', user.updateUser);
// router.delete('/users/:id', user.deleteUser);

// router.get('/restaurants', restaurant.getAll);
// router.get('/restaurants/:id', restaurant.getOne);
// router.put('/restaurants/:id', restaurant.updateOne);
// router.delete('/restaurants/:id', restaurant.deleteOne);
// router.post('/restaurants/supplier', restaurant.addSupplier);
// router.delete('/restaurants/supplier', restaurant.deleteSupplier);

// router.get('/suppliers', supplier.getAll);
// router.get('/suppliers/:id', supplier.getOne);
// router.put('/suppliers/:id', supplier.getOne);
// router.delete('/suppliers/:id', supplier.deleteOne);
// router.post('/suppliers/restaurant', supplier.addRestaurant);
// router.delete('/suppliers/restaurant', supplier.deleteRestaurant);

// router.get('/productions/:supplier_id', production.getAll);
// router.put('/productions/:production_id', production.updateOne);
// router.delete('/productions/:production_id', production.deleteOne);


module.exports = router;