const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
  entry: { main: './src/scripts/script.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'script.js',
        publicPath: ''
  },
    mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true
  },
  module: {
    rules: [
      
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
   test: /\.(woff|woff2|eot|ttf|otf)$/i,
   type: 'asset/resource',
  },
      {
    // применять это правило только к CSS-файлам
    test: /\.css$/,
    // при обработке этих файлов нужно использовать
    // MiniCssExtractPlugin.loader и css-loader
    use: [MiniCssExtractPlugin.loader, {
      loader: 'css-loader',
      options: { url: false, importLoaders: 1 }
    },
     'postcss-loader'
  ]
  }
    ]
  },
  plugins: [
    new CopyPlugin({
    patterns: [
        {
          from: path.resolve(__dirname, 'src/images'),
          to:   path.resolve(__dirname, 'dist/images')
        }
      ]
    }),

    new CopyPlugin({
    patterns: [
        {
          from: path.resolve(__dirname, 'src/fonts'),
          to:   path.resolve(__dirname, 'dist/fonts')
        }
      ]
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin()
  ]
}; 