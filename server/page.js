import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter, matchPath} from "react-router-dom";

import register from 'ignore-styles'
register(['.css','.sass', '.scss','.less','.png','.jpg','.gif']);

import {InjectStorerManager} from 'src/appStore';
import App from 'src/components/App';
import {routes} from 'src/routes';

const webpackClientAssets = require('../dist/webpack-client-assets.json');
//console.log('webpackClientAssets',webpackClientAssets);

export function renderHtml(pathUrl, props) {

  var appStore = InjectStorerManager.createStore(props || {});

  var content = ReactDOMServer.renderToString(<StaticRouter location={pathUrl} context={{}}>
    <App store={appStore}/>
  </StaticRouter>);
  //console.log(content);

  var state = appStore.getState();
  var propsScript = 'var APP_PROPS = ' + JSON.stringify(state);

  var html = ReactDOMServer.renderToStaticMarkup(<html>
    <head>
      <meta charSet="UTF-8"/>
      <title>ssr</title>
      <meta name="keywords" content="xxx xx xxx"/>
      <meta name="description" content="xxx xx xxx"/>
      <link charSet="UTF-8" rel="stylesheet" href={webpackClientAssets.main.css}/>
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{
          __html: content
        }}/>
      <script dangerouslySetInnerHTML={{
          __html: propsScript
        }}></script>
      <script src={webpackClientAssets.main.js}></script>
    </body>
  </html>);

  //console.log(html);

  return html;

}

export default(req, res, next) => {

  const pathUrl = req.path;
  //console.log('req.path', req.path)
  const activeRoute = routes.find((route) => matchPath(pathUrl, route)) || {}

  //console.log('activeRoute',activeRoute);

  if (!activeRoute.path)
    res.end('404 not found');

  const promise = activeRoute.getInitialProps
    ? activeRoute.getInitialProps(req.path)
    : Promise.resolve()

  promise.then((props) => {
    const _props = {
      //common: {}
      ...props
    };
    const html = renderHtml(pathUrl, _props);
    res.end(html);
  })

}
