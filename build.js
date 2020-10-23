
const webpack = require('webpack');

const clientConfigs = require('./webpack.config.client.js');
const serverConfigs = require('./webpack.config.server.js');


buildClientAssets();

function buildClientAssets(){
  const complier = webpack(clientConfigs,function(err){
    if(err){
      console.log(err);
      return;
    }
    buildServerAssets()
  });
}

function buildServerAssets(){
  const complier = webpack(serverConfigs,function(err){
    if(err){
      console.log(err)
    }
  });
}
