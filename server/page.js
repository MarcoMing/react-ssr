const path = require('path');
const fs = require('fs');
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom";

import { InjectStorerManager } from 'src/appStore';

import App from 'src/components/App';

const webpackClientAssets = require('../dist/webpack-client-assets.json');
//console.log('webpackClientAssets',webpackClientAssets);

export default (pathUrl,props)=>{

	var appStore = InjectStorerManager.createStore(props || {});
//	updateLocation(appStore)(pathUrl); //location change

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
