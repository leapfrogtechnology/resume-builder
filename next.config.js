const withImages = require('next-images');
const path = require('path');
const webpack = require('webpack');
module.exports =  withImages({
  webpack: config => {
    config.resolve.alias['~'] = path.resolve('src');
    return config;
  }
});
