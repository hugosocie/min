const devMode = process.env.NODE_ENV !== 'production'

const path = require( 'path' )
const webpack = require( 'webpack' );

const VueLoaderPlugin = require( 'vue-loader/lib/plugin' )
const HtmlWebPackPlugin = require( 'html-webpack-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' )
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' )


module.exports = {

  entry: {
    app: './src/app.js',
  },
  
  output: {
    path:  path.resolve( __dirname, 'dist' ),
    filename: '[name].js',
    publicPath: '/',
  },

  devServer: {
    compress: false,
    port: 1337,
    hot: true,
    contentBase: [ path.resolve( __dirname, 'src/html' ) ],
    watchContentBase: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [ {
          loader: 'html-loader',
          options: { minimize: true }
        } ]
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader'
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  },

  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'ROOT': path.resolve( __dirname, 'src' ),
      'STYLES': path.resolve( __dirname, 'src/styles' ),
      'COMPONENTS': path.resolve( __dirname, 'src/components' ),
      'PAGES': path.resolve( __dirname, 'src/pages' ),
    }
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      template: './src/styles/[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}