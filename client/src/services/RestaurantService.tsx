import { getAll, searchByCity, filter, claim } from "./RestSupService";
import { restaurantTypes } from "../types/restaurant-types";
import { supplierTypes } from "../types/supplier-types";

export async function getAllRestaurants(): Promise<restaurantTypes[] | supplierTypes[]> {
    return await getAll('/restaurants/getAllRestaurants');
}

export function searchRestaurantByCity (city: string) {
    searchByCity(city, '/search/searchRestaurantsByCity');
}

export function filterRestaurants (request: { eco_score: string; type: string[]; meal_type: string[] }) {
    filter(request, '/suppliers/filterRestaurants');
} 

export function claimSupplier ( request:  {sup_name: string, rest_id: number}) {
    claim (request, '/restaurants/claimSupplier');
}