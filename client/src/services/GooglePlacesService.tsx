import { googleResponseTypes } from "../types/google-places-types";

const apiKey = process.env.API_KEY
const baseUrl = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?';
const followUpUrl = 'inputtype=textquery&fields=place_id,name,formatted_address,geometry,price_level,rating,types'


export async function googlePlacesFetch(address: string | undefined): Promise<googleResponseTypes> {
  const res = await fetch(`${baseUrl}input=${address}&${followUpUrl}&key=${apiKey}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
      "Accept": "application/json"
    }
    });
  return await res.json()
   }