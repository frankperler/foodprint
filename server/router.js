'use strict';

const express = require('express')
const router = express.Router()

const register = require('./controllers/register/register.js');
const auth = require('./controllers/authentication/authentication.js');
const restaurant = require('./controllers/restaurant/restaurant.js');
const supplier = require('./controllers/supplier/supplier.js')
const search = require('./controllers/search/search');
const  middleware = require('./middleware/authMiddleware')

router.post('/register/FoodLoverUser', register.addFoodLoverUser);
router.post('/register/RestaurantUser', register.addRestaurantUser);
router.post('/register/SupplierUser', register.addSupplierUser);

router.post('/login', auth.findUser);
router.get('/profile', middleware.verifyToken, auth.profile);

router.post('/suppliers/filterRestaurants', supplier.filterRestaurants);
router.get('/suppliers/getAllSuppliers', supplier.getAllSuppliers);
router.post('/suppliers/addProduction', middleware.verifyToken, supplier.addProduction);
router.post('/suppliers/claimRestaurant', middleware.verifyToken, supplier.claimRestaurant);
router.get('/suppliers/:id', supplier.getOne);

router.get('/restaurants/getAllRestaurants', restaurant.getAllRestaurants);
router.post('/restaurants/claimSupplier', middleware.verifyToken, restaurant.claimSupplier);
router.post('/restaurants/filterSuppliers', restaurant.filterSuppliers);
router.get('/restaurants/:id', restaurant.getOne);

router.post('/search/searchRestaurantsByCity', search.searchRestaurantsByCity);
router.post('/search/searchRestaurantsByName', search.searchRestaurantsByName);
router.post('/search/searchSuppliersByCity', search.searchSuppliersByCity);
router.post('/search/searchSuppliersByName', search.searchSuppliersByName);


module.exports = router;