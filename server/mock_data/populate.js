const fetch = require('cross-fetch');
const { Restaurant } = require('../models/index');
require('dotenv').config();
const baseUrl = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?';
const baseUrlTwo = 'https://maps.googleapis.com/maps/api/place/details/json?';
const followUpUrl = 'inputtype=textquery&fields=place_id,name,formatted_address,geometry,price_level,rating,types'
const defaultLocation = 'Berlin';
// eslint-disable-next-line no-undef
const apiKey = process.env.API_KEY;

//mock meal_types and types
const mealTypes = ["Breakfast", "Lunch", "Dinner"];
const foodTypes = ["Café", "Vegan", "Vegetarian", "Bio", "Fast-Food"]
const foodNationalities = ["Asian", "Mexican", "Italian", "Greek", "Chinese", "Japanese", "Thai", "Indian" ];

//mock pictures
const veggie = ["IGfIGP5ONV0", "kPLccIMtS8E","HlNcigvUi4Q","J04BD4ysoh8"]; 
const mediterranean = ["6UxD0NzDywI","XtLPfib7OuM","v2z6Yhp_6Gc","o1EDsUFmuXQ","R18ecx07b3c","oOrx2_d5UV0"];
const coffee = ["GJMlSBS0FhU","6RJct18G_3I","QaGDmf5tMiE","0nT08Z-MhiE","hzlL6lWX54k"];
const asian = ["L1ZhjK-R6uc","4f4YZfDMLeU","DppzIK9TAxY","iXYD_ED94Gk","0Kbjfwunink","GXhmQt6MFX8","QcQ_9WxQFC0","9r5kHbw51fk","5Q_Edarv5zQ","XoByiBymX20"];
const mexican = ["JiRSy0GfqPA","Y0zbn9lPCEU","6WHl6T-fxU0","otQ6orzFTlk","NMBeU9Par_Q","2M9-LTrpxJw"];
const indian = ["eEWlcfydzQ4","WxePxgrIJbQ","g1qlhFbWPKg"];
const fast_food = ["J9lD6FS6_cs","8l8Yl2ruUsg","3tL4vtrFqTQ"]; 

//mock descriptions 
const description = ["Pop-up branch of Brammibal's appearing at the Potsdamer Platz from fall-2018. Features a daily assortment of freshly made donuts. Serves direct trade coffee and espresso drinks, and savory sandwiches with fillings like coconut-bacon, hummus, and pesto.", "The 2nd branch of Vedang opened 2019 in the mall Alexa. Serves a variety of plant-based burgers including the beyond burger, plus drinks like iced tea and sparkling water, sweets like soft serve ice cream, and sides like nuggets, fries, and chili cheese fries. Order at the counter, and enjoy your meal at the food court's shared seating. Note August 2021: Many places in Germany may now offer limited indoor dining and outdoor dining. Call ahead as availability, hours, and rules may vary.", "Delicious buffet restaurant serving 14 dishes cooked fresh each day, with approximately 90% being vegan. Buffet and salad - eat as much as you like for one price or single plates available. Desserts are made to order. Also offers freshly made juices, bio coffee, tea, fresh breads and focaccia. Located at a 3-minute walk from Sbahn-Beusselstrasse and U9-Bhf Birkenstrasse. Confirmed open, Jul 2021. Note August 2021: Many places in Germany may now offer limited indoor dining and outdoor dining. Call ahead as availability, hours, and rules may vary."]

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomValue(arr) {
  const num = Math.floor(Math.random() * arr.length);
  return arr[num];
}

const restaurants = [
  'Le Petit Chef - Berlin', 'Restaurant Maximilians Berlin', 'Seaside - Fish & Seafood Bar', 'Izumi Restaurant-Sushi Bar & Lieferservice', 'Savory Chay', 'Gendarmerie', 'Alt-Berliner Wirtshaus',
  'Sapa Sushi', 'Vedang', 'Samadhi', 'Nanoosh', 'Maloa Poke Bowl', 'Goodtime restaurant', 'La Via del Muro', 'Viale dei Tigli', 'Ristorante Marea', 'Restaurant Babami', 'Ki-Nova', 'Das Berliner Restaurant',
  'Osteria Caruso', 'Sushi Club', 'Ishin', 'China-City', 'GaYaYa Mitte in Mitte', 'momos-organic veggie dumplings', 'Quy Nguyen', 'Swing Kitchen', 'Veggie & Vega', 'Ryong', 'Good Morning Vietnam',
  'Haicoffee', 'Vincent Vegan', 'Chay Viet', 'Sunshine Vegan Restaurant Berlin', 'Ki-nova', 'Cat Tuong', 'Hum vegan cuisine', '1990 Vegan living', 'Francucci - Ristorante Dal 1962', 
  'Ristorante Lungomare', 'Sagrantino', 'Ristorante Cinque', 'Portofino', 'Ristorante Piazza Rossa', 'Il Punto', 'Maya', 'Lupita', 'Dos', 'Girasol Restaurant Cafe Bar', 'Santa Maria',
];


const populate = async () => {
  try {

    for (let i = 0; i < restaurants.length ; i++) {
      const mockRestaurant = {};

      // console.log('api key', apiKey)
      
      const res = await fetch(`${baseUrl}input=${restaurants[i]} ${defaultLocation}&${followUpUrl}&key=${apiKey}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "Accept": "application/json"
        }
      });
      
      // console.log('first fetch -----', res.status, res.ok)

      const restaurant = await res.json();

      mockRestaurant.place_id = restaurant.candidates[0].place_id
      mockRestaurant.rest_address = restaurant.candidates[0].formatted_address
     
      //mocked meal_type 
      
      // console.log(oneOrTwo)
      let mealTypesSet = new Set();
      for(let j = 0; j < 3; j++) {
        mealTypesSet.add(getRandomValue(mealTypes));
        }
    
      mockRestaurant.rest_meal_type = Array.from(mealTypesSet);
      console.log("-----meal_types: ", mockRestaurant.rest_meal_type)

      // mocked types array
      const oneOrTwo = (Math.floor(Math.random() * 11));
      let typesArr = [];
      if(oneOrTwo % 2 == 0) {
        typesArr.push(getRandomValue(foodNationalities));
        typesArr.push(getRandomValue(foodTypes));
      }
      else {
        typesArr.push(getRandomValue(foodTypes));
      }
      mockRestaurant.rest_types = typesArr;
      mockRestaurant.rest_lat = restaurant.candidates[0].geometry.location.lat
      mockRestaurant.rest_lng = restaurant.candidates[0].geometry.location.lng
      if (restaurant.candidates[0].price_level) {
        mockRestaurant.rest_price_level = restaurant.candidates[0].price_level
      } else {
        mockRestaurant.rest_price_level = Math.ceil(Math.random() * 4)
      }
      mockRestaurant.rest_name = restaurant.candidates[0].name
      mockRestaurant.rest_rating = restaurant.candidates[0].rating
      mockRestaurant.rest_eco_score = +(Math.random()*5).toFixed(2);
      mockRestaurant.rest_description = getRandomValue(description);
      
      
      //mocked picture
      let pic = null;
 
      // console.log(mockRestaurant.rest_types[0]);
      switch(mockRestaurant.rest_types[0]) {
        case "Vegan": case "Vegetarian":
          pic = getRandomValue(veggie);
          break;
        case "Bio": case "Italian": case"Greek":
          pic = getRandomValue(mediterranean);
          break;
        case "Café" :
          pic = getRandomValue(coffee);
          break;
        case "Asian": case "Thai": case "Japanese": case "Chinese":
          pic = getRandomValue(asian);
          break;
        case "Mexican":
          pic = getRandomValue(mexican);
          break;
        case "Fast-Food":
          pic = getRandomValue(fast_food);
          break;
        case "Indian":
          pic = getRandomValue(indian);
          break;
        default: pic = "IGfIGP5ONV0";
      }

      const picUrl = `https://source.unsplash.com/${pic}/1600x900`;
      // console.log(picUrl);
      mockRestaurant.rest_picture = picUrl;

      const restaurantDetails = await fetch(`${baseUrlTwo}place_id=${restaurant.candidates[0].place_id}&key=${apiKey}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
          "Accept": "application/json"
        }
      })

      const parsedRestaurantDetails = await restaurantDetails.json();

      if (parsedRestaurantDetails.result.opening_hours) {
        mockRestaurant.opening_hours = parsedRestaurantDetails.result.opening_hours.weekday_text
      }
      else {
        mockRestaurant.opening_hours =  [
          "Monday: 7:30 AM – 7:00 PM",
          "Tuesday: 7:30 AM – 7:00 PM",
          "Wednesday: 7:30 AM – 7:00 PM",
          "Thursday: 7:30 AM – 7:00 PM",
          "Friday: 7:30 AM – 7:00 PM",
          "Saturday: 9:00 AM – 7:00 PM",
          "Sunday: 10:00 AM – 6:00 PM"
        ]
      }

      if (parsedRestaurantDetails.result.formatted_phone_number) {
        mockRestaurant.rest_phone_number = parsedRestaurantDetails.result.formatted_phone_number;
      } 
      else {
        const random = Math.floor(getRandomArbitrary(23456781, 67893564))
        mockRestaurant.phone_number = `030 ${random}`;
      }

      if (parsedRestaurantDetails.result.website) {
        mockRestaurant.rest_website = parsedRestaurantDetails.result.website
      }
      else {
        mockRestaurant.rest_website = 'www.foodprint.com';
      }

      mockRestaurant.rest_city = parsedRestaurantDetails.result.address_components[3].long_name;

      
      mockRestaurant.UserId = i+50

      console.log(mockRestaurant)
      console.log('---------------------------', i)
      await Restaurant.create(mockRestaurant);
    }
  }
  catch (err) {
    console.log(err);
  }
};

setTimeout(() => {
  populate()
}, 3000);


  

