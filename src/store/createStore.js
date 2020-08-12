
import { applyMiddleware, compose, createStore as createReduxStore } from 'redux';
import thunk from 'redux-thunk';

const createStore = (reducer,initialState = {},middleware) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middles = [thunk,...middleware]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  let composeEnhancers = compose

  // if (__DEV__) {
  //   if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
  //     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //   }
  // }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    //makeRootReducer(reducer),
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(...middles),
      ...enhancers
    )
  )
  //store.asyncReducers = {}

  //
  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     const reducers = require('./reducers').default
  //     store.replaceReducer(reducers(store.asyncReducers))
  //   })
  // }

  return store
}

export default createStore
