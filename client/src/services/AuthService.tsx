import { fetchRequest } from "./fetch";

export function isUserAuthorized(token: string): Promise<string> {
    console.log("token from AuthService call ---", token)
    return fetchRequest('/profile', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
        }
    })
}