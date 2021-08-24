
import { restaurantTypes, supplierTypes } from "../types";
const url = 'http://localhost:3001';

export async function filterRestaurantsByCategories(eco_score?: number, type?: string[], meal_type?: string[]): Promise<restaurantTypes[]> {
  try {
    const res = await fetch(`${url}/suppliers/filterRestaurants`, {
      method: 'POST',
      body: JSON.stringify({
        eco_score,
        type,
        meal_type
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
  }
  catch (e) {
    console.error(e);
    return e;
  }
}

export async function filterSuppliersByCategories(eco_score?: number, bio?: boolean, food_types?: string[]): Promise<supplierTypes[]> {
  try {
    const res = await fetch(`${url}/restaurants/filterSuppliers`, {
      method: 'POST',
      body: JSON.stringify({
        eco_score,
        bio, // CAREFUL!!!! Not sure if this should be stringified <<<<<--------------
        food_types
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
  }
  catch (e) {
    console.error(e);
    return e;
  }
}

