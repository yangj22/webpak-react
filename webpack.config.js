const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin') 


module.exports={
    entry:{
        index:'./src/index.tsx'
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'index.js',
        globalObject: 'this'
    },

    devtool: 'inline-source-map',

    module:{
      rules:[
          {
              test:/\.css$/,
              use:['style-loader','css-loader']
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            })
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          },
          {
              test:/\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
              loader: 'url-loader',
              options: {
                limit: 10000
              }
          }
      ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins:[
        //HTML插件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./public/index.html",//模板地址
        }),
        new ExtractTextPlugin("styles.css"),
    ],

    devServer:{
        contentBase:path.resolve(__dirname,'build'),
        host:'localhost',
        port:'8080',
        open:true
    }

};
