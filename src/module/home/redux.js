
//import { InjectStorerManager } from 'src/appStore';

//const InjectStorerManager = require('src/appStore');

import http from 'utils/http';


export function actionCreators(){
  return (dispatch) => {
    return {
      // dispatching plain actions
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
      reset: () => dispatch({ type: 'RESET' }),
      getUser: () => {
        return http.get('https://api.github.com/rate_limit')
                .then((result)=>{
                   dispatch({type: 'GITHUB_USER',user: result.data })
                })
      }
    }
  }
}


export function counterReducer(state = {}, action) {
  //console.log('state',state);
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'GITHUB_USER':
      return { ...state, user: action.user }
      break;
    default:
      return {...state}
  }
}
