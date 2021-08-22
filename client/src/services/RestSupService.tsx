import { restaurantTypes } from "../types";
import { supplierTypes } from "../types/supplier-types";
const url = 'http://localhost:3001';

export async function getAll(route: string): Promise<supplierTypes[]> {
  try {
    const res = await fetch(`${url}${route}`);
    return await res.json();
  }
  catch (e) {
    console.error(e);
    return e;
  }
}

export async function searchByCity(city: string, route: string): Promise<supplierTypes[] | restaurantTypes[]> {
  try {
    const res = await fetch(`${url}${route}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(city)
    });
    return await res.json();
  }
  catch (e) {
    console.error(e);
    return e;
  }
}

// export async function filter(request:
//   { eco_score: string; bio: boolean; food_types: string[] } |
//   { eco_score: string; type: string[]; meal_type: string[] },
//   route: string) {
//   try {
//     const res = await fetch(`${url}${route}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(request)
//     });
//     return await res.json();
//   }
//   catch (e) {
//     console.error(e);
//   }
// }

// export async function claim(request:
//   { sup_name: string, rest_id: number } |
//   { rest_name: string, id: number },
//   route: string) {
//   try {
//     const res = await fetch(`${url}${route}`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(request)
//     });
//     return await res.json();
//   }
//   catch (e) {
//     console.error(e);
//   }
// }

