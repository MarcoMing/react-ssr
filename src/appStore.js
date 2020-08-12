import Reduxthunk from 'redux-thunk';
import createStore from 'src/store/createStore';
import { updateLocation } from 'src/store/location';
import { makeRootReducer } from 'src/store/reducers';
import { reducers } from 'src/module/redux';

const middlewares = [
  Reduxthunk
]

export let InjectStorerManager = {
  store: null,
  injectStore: function(store){
    this.store = store;
  },
  getStore: function(){
    return this.store
  },
  createStore: function(initialState){
    const appStore = createStore(
      makeRootReducer(reducers),
      initialState,
      middlewares
    );
    //appStore.subscribe(() => console.log(appStore.getState()));
    this.injectStore(appStore);
    return appStore;
  }
}
