
const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const nodeExternals = require('webpack-node-externals')
const baseConfigs = require('./webpack.config.base.js');
const NODE_ENV = process.env.NODE_ENV || 'development';


// const AssetsPlugin = require('assets-webpack-plugin')
// const assetsPluginInstance = new AssetsPlugin({
// 	path: path.join(__dirname, './dist'),
// 	filename: 'webpack-server-assets.json',
// })

const serverConfigs = {
  mode: NODE_ENV,
  entry: {
    server: './server/page.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "page.generator.js",
    //publicPath: '/',
    //filename: "page.generator-[hash:8].js",
    // 使用page.generator.js的是nodejs，所以需要将
    // webpack模块转化为CMD模块
    library: 'page',
    libraryTarget: 'commonjs'
  },
  plugins:[
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    }),
    //AssetsPlugin
  ]

}

module.exports = merge(baseConfigs,serverConfigs);
