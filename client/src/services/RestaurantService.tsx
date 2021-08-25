
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


export async function claimSupplier(sup_name: string, rest_id: number, token: string): Promise<restaurantTypes> {
  try {
    const res = await fetch(`${url}/restaurants/claimSupplier`, {
      method: 'POST',
      body: JSON.stringify({
        sup_name,
        rest_id
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    return await res.json()
  }
  catch (e) {
    console.error(e);
    return e;
  }
}

