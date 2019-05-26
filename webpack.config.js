const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports={
    entry:{
        index:'./src/index.js'
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'index.js'
    },
    module:{
      rules:[
          {
              test:/\.(js|jsx)$/,
              use:['babel-loader'],
              exclude:/node_modules/
          }
      ]
    },

    plugins:[
        //HTML插件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: "./public/index.html",//模板地址
        })
    ],

    devServer:{
        contentBase:path.resolve(__dirname,'build'),
        host:'localhost',
        port:'8080',
        open:true
    }

};
