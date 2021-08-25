const url = 'http://localhost:3001';

export function fetchRequest(path: string, options: any) {
  return fetch(url + path, options)
    .then(res => res.status < 400 ? res : Promise.reject())
    .then(res => res.status !== 204 ? res.json() : res)
    .catch(err => {
      console.error('fetch request did not work :( Error: ', err);
    });
}