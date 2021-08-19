import { supplierTypes, supplierAction } from "../types/supplier-types"

export const supplierReducers = (state: supplierTypes[], action: supplierAction): supplierTypes[] => {
  // if (action.type === 'any-change') {
  //   return {
  //     ...state,
  //   }
  // }
  return state
}

export const supplierState: supplierTypes[] = [
  {
    sup_id: 1,
    sup_name: "Ugo's Garden",
    sup_food_type: ['Vegetables', 'Fruits', 'Meat', 'Cheese', 'Bread'],
    sup_address: 'Kopenhagener Straße 95, 10757 Wolfsburg, Deutschland',
    sup_city: 'Berlin',
    sup_phone_number: '0345 3216435',
    sup_lat: 53.611483,
    sup_lng: 12.835054,
    sup_website: 'www.kleintsalzwede.com',
    sup_eco_score: 5,
    sup_description: 'Since I was a kid I have always worked in the production and trading of fruit and vegetables, at the beginning dealing only with conventional methods and products. In 2011, after a trip to Germany where I came into contact with various organic fruit and vegetables producers, I realized the potential and the countless positive aspects linked to this method of production, therefore I decided to found Bioplus. The name embodies the very heart of the term organic (which in italian translates to “biologico”), combined with the desire to guarantee the consumer something extra, a plus. That extra something is the guarantee of a 100% natural product and the maximum commitment we put into protecting the environment. The company is located in Canicattì, a village in Sicily, which is exactly the land of origin of the Italia grape. It includes 25 hectares of vineyards, also located in neighbouring villages, some close to other plantations, some others with a seaview.',
    sup_picture: 'https://source.unsplash.com/KaK2jp8ie8s/1600x900',
    sup_greenTech: [
      'Water Recycling',
      'Non-GMO',
      'Biodynamic',
      'No Pesticides',
      'Organic',
      'Animal Rights',
      'Biofuels'
    ],
    sup_energy: ['Electricity (renewable)', 'Natural gas'],
    sup_vehicles: 'Diesel'
  },
  {
    sup_id: 2,
    sup_name: "Arnold's Garden",
    sup_food_type: ['Vegetables', 'Fruits', 'Meat', 'Cheese', 'Bread'],
    sup_address: 'Kopenhagener Straße 95, 10757 Wolfsburg, Deutschland',
    sup_city: 'Berlin',
    sup_phone_number: '0345 3216435',
    sup_lat: 54.611483,
    sup_lng: 13.835054,
    sup_website: 'www.kleintsalzwede.com',
    sup_eco_score: 3,
    sup_description: 'Since I was a kid I have always worked in the production and trading of fruit and vegetables, at the beginning dealing only with conventional methods and products. In 2011, after a trip to Germany where I came into contact with various organic fruit and vegetables producers, I realized the potential and the countless positive aspects linked to this method of production, therefore I decided to found Bioplus. The name embodies the very heart of the term organic (which in italian translates to “biologico”), combined with the desire to guarantee the consumer something extra, a plus. That extra something is the guarantee of a 100% natural product and the maximum commitment we put into protecting the environment. The company is located in Canicattì, a village in Sicily, which is exactly the land of origin of the Italia grape. It includes 25 hectares of vineyards, also located in neighbouring villages, some close to other plantations, some others with a seaview.',
    sup_picture: 'https://source.unsplash.com/KaK2jp8ie8s/1600x900',
    sup_greenTech: [
      'Water Recycling',
      'Non-GMO',
      'Biodynamic',
      'No Pesticides',
      'Organic',
      'Animal Rights',
      'Biofuels'
    ],
    sup_energy: ['Electricity (renewable)', 'Natural gas'],
    sup_vehicles: 'Diesel'
  },
  {
    sup_id: 3,
    sup_name: "Fred's Garden",
    sup_food_type: ['Vegetables', 'Fruits', 'Meat', 'Cheese', 'Bread'],
    sup_address: 'Kopenhagener Straße 95, 10757 Wolfsburg, Deutschland',
    sup_city: 'Berlin',
    sup_phone_number: '0345 3216435',
    sup_lat: 54.621483,
    sup_lng: 13.815054,
    sup_website: 'www.kleintsalzwede.com',
    sup_eco_score: 4.1,
    sup_description: 'Since I was a kid I have always worked in the production and trading of fruit and vegetables, at the beginning dealing only with conventional methods and products. In 2011, after a trip to Germany where I came into contact with various organic fruit and vegetables producers, I realized the potential and the countless positive aspects linked to this method of production, therefore I decided to found Bioplus. The name embodies the very heart of the term organic (which in italian translates to “biologico”), combined with the desire to guarantee the consumer something extra, a plus. That extra something is the guarantee of a 100% natural product and the maximum commitment we put into protecting the environment. The company is located in Canicattì, a village in Sicily, which is exactly the land of origin of the Italia grape. It includes 25 hectares of vineyards, also located in neighbouring villages, some close to other plantations, some others with a seaview.',
    sup_picture: 'https://source.unsplash.com/KaK2jp8ie8s/1600x900',
    sup_greenTech: [
      'Water Recycling',
      'Non-GMO',
      'Biodynamic',
      'No Pesticides',
      'Organic',
      'Animal Rights',
      'Biofuels'
    ],
    sup_energy: ['Electricity (renewable)', 'Natural gas'],
    sup_vehicles: 'Diesel'
  },
]