import { getAll, searchByCity, filter, claim } from "./RestSupService";
import { supplierTypes } from "../types/supplier-types";
import { restaurantTypes } from "../types/restaurant-types";
const url = 'http://localhost:3001';

export async function getAllSuppliers(): Promise<supplierTypes[]> {
  try {
    const res = await fetch(`${url}/suppliers/getAllSuppliers`);
    return await res.json();
  }
  catch (e) {
    console.error(e);
    return e;
  }
}

export function searchSuppliersByCity(city: string) {
  searchByCity(city, '/search/searchSuppliersByCity')
}

export function filterSuppliers(request: { eco_score: string; bio: boolean; food_types: string[] }) {
  filter(request, '/restaurants/filterSuppliers')
}

export function claimRestaurant(request: { rest_name: string, sup_id: number }) {
  claim(request, '/suppliers/claimRestaurant');
}