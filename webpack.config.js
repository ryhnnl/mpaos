const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin(
   {
       template: './client/index.html',
       filename: 'index.html',
       inject: 'body' 
   }
)

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'index_bundle.js',
    },
    module: {
        rules: [
           /* { test: /\.css$/,
              use: [
              { loader:'style-loader' },
              { loader: 'css-loader'}
              ]
            },*/
            {
                test: /\.css$/,
                use: [
                  { loader: 'style-loader'}, 
                  { loader: 'css-loader' }
                ]
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [ HtmlWebpackPluginConfig ]
}
