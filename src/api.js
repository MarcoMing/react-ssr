

import http from 'utils/http';

export function fetchData () {

  return http('https://api.github.com/')
    .then((data) => {

      const props = {
        home: {
          count: 10,
          dataSource: data && data.data
        }
      }
      return props
    })
    .catch((error) => {
      console.warn(error)
      return null
    });
}
