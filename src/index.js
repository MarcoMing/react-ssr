import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

//var APP_PROPS = window.APP_PROPS || {};
import { InjectStorerManager } from './appStore';
import App from "src/components/App";

const initialState = window.APP_PROPS;

const appStore = InjectStorerManager.createStore(initialState);
//console.log('appStore',appStore);

const mountNode = document.getElementById("app");
ReactDOM.render(
  <BrowserRouter basename="/">
    <App store={appStore} />
  </BrowserRouter>
   ,
  mountNode
);
