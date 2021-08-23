
import { restaurantTypes } from "../types";
const url = 'http://localhost:3001';

export async function filterRerstaurantsByCategories(eco_score: number, type: string[], meal_type: string[]): Promise<restaurantTypes[]> {
  try {
    const res = await fetch(`${url}/suppliers/filterRestaurants`);
    return await res.json();
  }
  catch (e) {
    console.error(e);
    return e;
  }
}

export async function filterSuppliersByCategories(eco_score: number, bio: boolean, food_types: string[]): Promise<restaurantTypes[]> {
  try {
    const res = await fetch(`${url}/restaurants/filterSuppliers`);
    return await res.json();
  }
  catch (e) {
    console.error(e);
    return e;
  }
}

