
import { restaurantTypes, supplierTypes } from "../types";
const url = 'http://localhost:3001';

export async function findRestaurantsByName(name?: string): Promise<restaurantTypes[]> {
  try {
    const res = await fetch(`${url}/search/searchRestaurantsByName`, {
      method: 'POST',
      body: JSON.stringify({
        "rest_name": name
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return await res.json();
  }
  catch (e) {
    console.error(e);
    return e;
  }
}


export async function findRestaurantsByCity(city?: string): Promise<restaurantTypes[]> {
  try {
    const res = await fetch(`${url}/search/searchRestaurantsByCity`, {
      method: 'POST',
      body: JSON.stringify({
        "rest_city": city
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return await res.json();
  }
  catch (e) {
    console.error(e);
    return e;
  }
}


export async function findSuppliersByName(name?: string): Promise<supplierTypes[]> {
  try {
    const res = await fetch(`${url}/search/searchSuppliersByName`, {
      method: 'POST',
      body: JSON.stringify({
        "sup_name": name
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return await res.json();
  }
  catch (e) {
    console.error(e);
    return e;
  }
}


export async function findSuppliersByCity(city?: string): Promise<supplierTypes[]> {
  try {
    const res = await fetch(`${url}/search/searchSuppliersByCity`, {
      method: 'POST',
      body: JSON.stringify({
        "sup_address": city
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    return await res.json();
  }
  catch (e) {
    console.error(e);
    return e;
  }
}