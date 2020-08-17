import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter,matchPath } from "react-router-dom";

import 'ignore-styles';

import { InjectStorerManager } from 'src/appStore';
import App from 'src/components/App';

import { routes } from 'src/routes';

const webpackClientAssets = require('../dist/webpack-client-assets.json');
//console.log('webpackClientAssets',webpackClientAssets);

export function renderHtml(pathUrl,props){

	var appStore = InjectStorerManager.createStore(props || {});

	var content = ReactDOMServer.renderToString(
		<StaticRouter location={pathUrl} context={{}}>
	    <App store={appStore} />
	  </StaticRouter>
	);

	var state = appStore.getState();
	var propsScript = 'var APP_PROPS = ' + JSON.stringify(state);

	var html = ReactDOMServer.renderToStaticMarkup(
		<html>
			<head>
				<meta charSet="UTF-8" />
  			<title>ssr</title>
				<base href="/web" />
				<meta name="keywords" content="xxx xx xxx" />
				<meta name="description" content="xxx xx xxx" />
				<link charSet="UTF-8" rel="stylesheet" href={webpackClientAssets.main.css} />
			</head>
			<body>
				<div id="app" dangerouslySetInnerHTML={
					{__html: content}
				} />
				<script dangerouslySetInnerHTML={
					{__html: propsScript}
				}></script>
			<script src={webpackClientAssets.main.js}></script>
			</body>
		</html>
	);

	return html;

}

export default (req, res, next)=>{

	const pathUrl = req.path;
  console.log('req.path',req.path)

  const activeRoute = routes.find(
    (route) => matchPath(pathUrl, route)
  ) || {}

  if(!activeRoute.path) res.end('404 not found');

	const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve()

  promise.then((data)=>{

    //console.log('data',data && data.data);
    const props = {
      home: {
        count: 10,
        dataSource: data && data.data
      }
    };
    const html = renderHtml(pathUrl,props);
    res.end(html);
  })

}
