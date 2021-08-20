import { restaurantTypes, restaurantAction } from "../types/restaurant-types"

export const restaurantReducers = (state: restaurantTypes[], action: restaurantAction): restaurantTypes[] => {
  if (action.type === 'update-all') {
    return {
      ...state,
      //add action payload
    }
  }
  return state
}

export const restaurantState: restaurantTypes[] = [
  {
    place_id: 'ChIJjWSRFtBRqEcReqmdfCNIYQw',
    rest_address: 'Kronenstraße 70, 10117 Berlin, Deutschland',
    rest_city: 'Berlin',
    rest_meal_type: ['Lunch'],
    rest_types: ['Chinese', 'Bio'],
    rest_lat: 52.51124,
    rest_lng: 13.387992,
    rest_price_level: 2,
    rest_name: 'Savory Chay',
    rest_rating: 4.5,
    rest_eco_score: 1.35,
    rest_description: 'Delicious buffet restaurant serving 14 dishes cooked fresh each day, with approximately 90% being vegan. Buffet and salad - eat as much as you like for one price or single plates available. Desserts are made to order. Also offers freshly made juices, bio coffee, tea, fresh breads and focaccia. Located at a 3-minute walk from Sbahn-Beusselstrasse and U9-Bhf Birkenstrasse. Confirmed open, Jul 2021. Note August 2021: Many places in Germany may now offer limited indoor dining and outdoor dining. Call ahead as availability, hours, and rules may vary.',
    rest_picture: 'https://source.unsplash.com/GXhmQt6MFX8/1600x900',
    opening_hours: [
      'Monday: 11:30 AM – 8:00 PM',
      'Tuesday: 11:30 AM – 8:00 PM',
      'Wednesday: 11:30 AM – 8:00 PM',
      'Thursday: 11:30 AM – 8:00 PM',
      'Friday: 11:30 AM – 8:00 PM',
      'Saturday: 5:00 – 9:00 PM',
      'Sunday: Closed'
    ],
    rest_phone_number: '030 20647692',
    rest_website: 'http://savorychay.de/'
  },
  {
    place_id: 'ChIJpwXWitpRqEcRkrffi1t4SJ0',
    rest_address: 'Behrenstraße 42, 10117 Berlin, Deutschland',
    rest_city: 'Berlin',
    rest_meal_type: ['Dinner'],
    rest_types: ['Vegetarian'],
    rest_lat: 52.5159315,
    rest_lng: 13.391064,
    rest_price_level: 2,
    rest_name: 'Gendarmerie',
    rest_rating: 4.3,
    rest_eco_score: 4.15,
    rest_description: 'Delicious buffet restaurant serving 14 dishes cooked fresh each day, with approximately 90% being vegan. Buffet and salad - eat as much as you like for one price or single plates available. Desserts are made to order. Also offers freshly made juices, bio coffee, tea, fresh breads and focaccia. Located at a 3-minute walk from Sbahn-Beusselstrasse and U9-Bhf Birkenstrasse. Confirmed open, Jul 2021. Note August 2021: Many places in Germany may now offer limited indoor dining and outdoor dining. Call ahead as availability, hours, and rules may vary.',
    rest_picture: 'https://source.unsplash.com/J04BD4ysoh8/1600x900',
    opening_hours: [
      'Monday: 11:00 AM – 12:00 AM',
      'Tuesday: 11:00 AM – 12:00 AM',
      'Wednesday: 11:00 AM – 12:00 AM',
      'Thursday: 11:00 AM – 12:00 AM',
      'Friday: 11:00 AM – 12:00 AM',
      'Saturday: 11:00 AM – 12:00 AM',
      'Sunday: 12:00 PM – 12:00 AM'
    ],
    rest_phone_number: '030 76775270',
    rest_website: 'https://restaurant-gendarmerie.de/'
  },
  {
    place_id: 'ChIJ21LM58VRqEcR08JXG7T-b6w',
    rest_address: 'Wilhelmstraße 77, 10117 Berlin, Deutschland',
    rest_city: 'Berlin',
    rest_meal_type: ['Dinner'],
    rest_types: ['Italian', 'Café', 'Chinese', 'Bio', 'Vegetarian'],
    rest_lat: 52.514443,
    rest_lng: 13.3813895,
    rest_price_level: 2,
    rest_name: 'Alt-Berliner Wirtshaus',
    rest_rating: 4.1,
    rest_eco_score: 1.70,
    rest_description: "The 2nd branch of Vedang opened 2019 in the mall Alexa. Serves a variety of plant-based burgers including the beyond burger, plus drinks like iced tea and sparkling water, sweets like soft serve ice cream, and sides like nuggets, fries, and chili cheese fries. Order at the counter, and enjoy your meal at the food court's shared seating. Note August 2021: Many places in Germany may now offer limited indoor dining and outdoor dining. Call ahead as availability, hours, and rules may vary.",
    rest_picture: 'https://source.unsplash.com/v2z6Yhp_6Gc/1600x900',
    opening_hours: [
      'Monday: 12:00 – 11:00 PM',
      'Tuesday: 12:00 – 11:00 PM',
      'Wednesday: 12:00 – 11:00 PM',
      'Thursday: 12:00 – 11:00 PM',
      'Friday: 12:00 – 11:00 PM',
      'Saturday: 12:00 – 11:00 PM',
      'Sunday: 12:00 – 11:00 PM'
    ],
    rest_phone_number: '030 22488205',
    rest_website: 'http://www.altberliner-wirtshaus.de/'
  },
  {
    place_id: 'ChIJYWKRX6BRqEcRfN6pR4NPwOA',
    rest_address: 'Grand Hyatt Berlin, Marlene-Dietrich-Platz 2, 10785 Berlin, Deutschland',
    rest_city: 'Berlin',
    rest_meal_type: ['Breakfast'],
    rest_types: ['Café', 'Chinese', 'Bio'],
    rest_lat: 52.5082832,
    rest_lng: 13.3726697,
    rest_price_level: 1,
    rest_name: 'Le Petit Chef - Berlin',
    rest_rating: 4.6,
    rest_eco_score: 2.93,
    rest_description: "The 2nd branch of Vedang opened 2019 in the mall Alexa. Serves a variety of plant-based burgers including the beyond burger, plus drinks like iced tea and sparkling water, sweets like soft serve ice cream, and sides like nuggets, fries, and chili cheese fries. Order at the counter, and enjoy your meal at the food court's shared seating. Note August 2021: Many places in Germany may now offer limited indoor dining and outdoor dining. Call ahead as availability, hours, and rules may vary.",
    rest_picture: 'https://source.unsplash.com/QaGDmf5tMiE/1600x900',
    opening_hours: [
      'Monday: 7:30 AM – 7:00 PM',
      'Tuesday: 7:30 AM – 7:00 PM',
      'Wednesday: 7:30 AM – 7:00 PM',
      'Thursday: 7:30 AM – 7:00 PM',
      'Friday: 7:30 AM – 7:00 PM',
      'Saturday: 9:00 AM – 7:00 PM',
      'Sunday: 10:00 AM – 6:00 PM'
    ],
    rest_phone_number: '030 25531234',
    rest_website: 'https://www.lepetitchef.de/berlin'
  }
]