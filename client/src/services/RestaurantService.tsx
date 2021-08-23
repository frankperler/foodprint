
import { restaurantTypes } from "../types/restaurant-types";
const url = 'http://localhost:3001';

export async function getAllRestaurants(): Promise<restaurantTypes[]> {
  try {
    const res = await fetch(`${url}/restaurants/getAllRestaurants`);
    return await res.json();
  }
  catch (e) {
    console.error(e);
    return e;
  }
}

export async function getRestaurantById(id: string): Promise<restaurantTypes> {
  try {
    const res = await fetch(`${url}/restaurants/${id}`);
    return await res.json()
  }
  catch (e) {
    console.error(e);
    return e;
  }
}



// export function searchRestaurantByCity(city: string) {
//   searchByCity(city, '/search/searchRestaurantsByCity');
// }

// export function filterRestaurants(request: { eco_score: string; type: string[]; meal_type: string[] }) {
//   filter(request, '/suppliers/filterRestaurants');
// }

// export function claimSupplier(request: { sup_name: string, rest_id: number }) {
//   claim(request, '/restaurants/claimSupplier');
// }