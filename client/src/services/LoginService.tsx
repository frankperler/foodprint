const url = 'http://localhost:3001';

import { loginTypes } from '../types';
import { fetchRequest } from './fetch';

export function logIn (user: loginTypes) {
  return fetchRequest('/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  })
}
