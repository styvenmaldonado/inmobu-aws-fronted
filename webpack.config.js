const path = require('path')
const webpack = require('webpack')
const { NODE_ENV } = process.env;

const isDev = ( NODE_ENV === 'development')

module.exports = {
    entry : 
    ['./src/frontend/pwa/index',
    'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false'],
    mode: 'development',
    output: {
        filename : isDev ? 'bundle.js' : 'bundle.js',
        path: path.resolve(__dirname,'public/assets'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
              },
            },  
            {
              test: /\.(s*)css$/,
              use: [
                'css-loader',
              ]
            }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ]
}