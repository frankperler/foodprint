import { supplierTypes } from "../types/supplier-types";
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

export async function getSupplierById(id: string): Promise<supplierTypes> {
  try {
    const res = await fetch(`${url}/suppliers/${id}`);
    return await res.json()
  }
  catch (e) {
    console.error(e);
    return e;
  }
}


export async function claimRestaurant(rest_name: string, sup_id: number, token: string): Promise<supplierTypes> {
  try {
    const res = await fetch(`${url}/suppliers/claimRestaurant`, {
      method: 'POST',
      body: JSON.stringify({
        rest_name,
        sup_id
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
