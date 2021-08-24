'use strict';

const express = require('express')
const router = express.Router()

const register = require('./controllers/register/register.js');
const auth = require('./controllers/authentication/authentication.js');
const restaurant = require('./controllers/restaurant/restaurant.js');
const supplier = require('./controllers/supplier/supplier.js')
const search = require('./controllers/search/search');
// const supplier = require('./controllers/supplier/supplier.js');
// const production  = require('./controllers/production/production.js');


router.post('/register/FoodLoverUser', register.addFoodLoverUser);
router.post('/register/RestaurantUser', register.addRestaurantUser);
router.post('/register/SupplierUser', register.addSupplierUser);

router.post('/login', auth.findUser);

router.post('/suppliers/filterRestaurants', supplier.filterRestaurants);
router.get('/suppliers/getAllSuppliers', supplier.getAllSuppliers);
router.post('/suppliers/addProduction', supplier.addProduction);
router.post('/suppliers/claimRestaurant', supplier.claimRestaurant);
router.get('/suppliers/:id', supplier.getOne);

router.get('/restaurants/getAllRestaurants', restaurant.getAllRestaurants);
router.post('/restaurants/claimSupplier', restaurant.claimSupplier);
router.post('/restaurants/filterSuppliers', restaurant.filterSuppliers);
router.get('/restaurants/:id', restaurant.getOne);

router.post('/search/searchRestaurantsByCity', search.searchRestaurantsByCity);
router.post('/search/searchRestaurantsByName', search.searchRestaurantsByName);
router.post('/search/searchSuppliersByCity', search.searchSuppliersByCity);
router.post('/search/searchSuppliersByName', search.searchSuppliersByName);

// router.put('/users/:id', user.updateUser);
// router.delete('/users/:id', user.deleteUser);


// router.put('/restaurants/:id', restaurant.updateOne);
// router.delete('/restaurants/:id', restaurant.deleteOne);
// router.delete('/restaurants/supplier', restaurant.deleteSupplier);

// router.get('/suppliers/:id', supplier.getOne);
// router.put('/suppliers/:id', supplier.getOne);
// router.delete('/suppliers/:id', supplier.deleteOne);
// router.delete('/suppliers/restaurant', supplier.deleteRestaurant);

// router.get('/productions/:supplier_id', production.getAll);
// router.put('/productions/:production_id', production.updateOne);
// router.delete('/productions/:production_id', production.deleteOne);


module.exports = router;