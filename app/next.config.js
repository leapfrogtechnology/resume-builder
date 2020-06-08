const path = require('path');
const webpack = require('webpack');
const withImages = require('next-images');
const { parsed: localEnv } = require('dotenv').config();

module.exports = withImages({
  webpack: config => {
    config.resolve.alias['~'] = path.resolve('src');
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    return config;
  },
});
