const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const PugPlugin = require('pug-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9000
    },
    resolve: {
        extensions: ['.js', '.ts', '.pug', '.css']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.pug'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    module: {

        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
            {
                test: /\.pug$/,
                loader: PugPlugin.loader
            },

        ]
    }

}
