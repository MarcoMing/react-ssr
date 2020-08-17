
import { InjectStorerManager } from 'src/appStore';

console.log('InjectStorerManager',InjectStorerManager);

export function actionCreators(){
  return (dispatch) => {
    return {
      // dispatching plain actions
      increment: () => dispatch({ type: 'INCREMENT' }),
      decrement: () => dispatch({ type: 'DECREMENT' }),
      reset: () => dispatch({ type: 'RESET' })
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
    default:
      return {...state}
  }
}
