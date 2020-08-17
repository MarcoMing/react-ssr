

import http from './utils/http';

export function fetchData () {

  return http('https://api.github.com/')
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.warn(error)
      return null
    });
}
