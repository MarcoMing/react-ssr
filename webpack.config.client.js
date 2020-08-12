

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfigs = require('./webpack.config.base.js');
const NODE_ENV = process.env.NODE_ENV || 'development';

//const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const AssetsPlugin = require('assets-webpack-plugin')
const assetsPluginInstance = new AssetsPlugin({
	path: path.join(__dirname, './dist'),
	filename: 'webpack-client-assets.json',
})

const clientConfigs = {
	mode: NODE_ENV,
  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],
  //devtool: NODE_ENV === 'production' ? 'source-map' : '',
  devServer: {
    contentBase: './dist',
    hot: NODE_ENV === 'development',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
		//filename: 'main.vendors.js'
    filename: NODE_ENV === 'development' ? '[name].js?[hash]' :'[name].[contenthash].js'
  },
  target: "web",
  resolve:{
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  plugins: [
		//new CleanWebpackPlugin(),
		new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    assetsPluginInstance,
  ]

}

module.exports = merge(baseConfigs,clientConfigs);
