import { restaurantTypes } from ".";
import { productionTypes } from "./production-types";

export type supplierTypes = {
  id: number,
  sup_name: string,
  sup_address: string,
  sup_city: string,
  sup_phone_number: string,
  sup_lat: number,
  sup_lng: number,
  sup_website: string,
  sup_eco_score: number,
  sup_description: string,
  sup_picture: string,
  sup_greenTech: string[],
  sup_energy: string[],
  sup_vehicles: string,
  UserId: number,
  Restaurants: restaurantTypes[],
  Productions: productionTypes[]
}
