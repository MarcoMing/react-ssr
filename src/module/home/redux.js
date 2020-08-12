
//import { InjectStorerManager } from 'src/appStore';
//
// console.log(require('src/appStore'));

const { InjectStorerManager } = require('src/appStore');

console.log('InjectStorerManager',InjectStorerManager);
//const store = InjectStorerManager.getStore();

//console.log('store',store)

export const actionCreators = {

}


export function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
