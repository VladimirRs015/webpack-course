const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = (env, argv) => {
  let isProduction = argv.mode === 'development'
  return {
    mode : argv.mode ? argv.mode : 'production',
    entry: "./src/main.js",
    devtool :  isProduction ? "eval-cheap-source-map" : "source-map",
    output: {
      filename: "[name].[hash].js",
      path: path.resolve(__dirname, "dist"),
    },
    resolve : {
      alias : {
        'vue$' : 'vue/dist/vue.esm.js'
      }
    },
    optimization : {
      splitChunks : {
        chunks : "all"
      }
    },
    devServer : {
      contentBase : './dist',
      hot :true
    },
    
    module: {
      rules: [
        {
          test:/\.js/,
          use: 'babel-loader', 
          exclude : [/node_modules/]
        }, 
        {
          test:/\.css/,
          use : [{
            loader : MiniCssExtractPlugin.loader,
            options :{
              hmr : true,
              reloadAll : true 
            }
          },'css-loader']
        }
      ] 
    },
    plugins :[new HtmlWebpackPlugin({
        title : 'Practica de webpack',
        template : './src/assets/index.html'
    }),new MiniCssExtractPlugin(),
       new CleanWebpackPlugin], 
    
  }
};
