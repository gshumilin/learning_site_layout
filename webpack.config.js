const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const PugPlugin = require('pug-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),

  output: {
    path: path.join(__dirname, 'dist'),
  },

  entry: {
    index: './pages/index/index.pug',
    colors_and_types: './pages/colors_and_types/colors_and_types.pug',
    form_elements: './pages/form_elements/form_elements.pug',
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    watchFiles: {
      paths: ['src/**/*.*', 'assets/**/*.*'],
      options: {
        usePolling: true,
      },
    },
  },

  plugins: [
    new CleanWebpackPlugin(),

    new PugPlugin({
      pretty: true,
      js: {
        filename: 'assets/js/[name].[contenthash:8].js',
      },
      css: {
        filename: '[name].[contenthash:8].css',
      },
    }),
  ],

  module: {

    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        include: /fonts/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext][query]'
        }
      },
    ]
  }

}
