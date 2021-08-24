import { loginTypes, userTypes } from '../types';
import { fetchRequest } from './fetch';

export function logIn(user: loginTypes): Promise<userTypes> {
  return fetchRequest('/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  })
}
