const url = 'http://localhost:3001';

import { loginTypes } from '../types';

export function logIn (user: loginTypes) {
  return fetchRequest('/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  })
}


function fetchRequest (path: string, options: any) {
  return fetch(url + path, options)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(err => {
      console.error('fetch request did not work :( Error: ', err);
    });
}