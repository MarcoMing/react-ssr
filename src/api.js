

import http from './utils/http';

export function fetchData () {


  return http('https://fzmall.yjbtest.com/mall/api/CRH-MALLU322?rnd=1597051916982&risk_lv=&client_id=&recommend_return=1')
    .then((data) => {
      return data
    })
    .catch((error) => {
      console.warn(error)
      return null
    });
}
