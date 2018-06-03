const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const MODE = 'none';
const src = './src';
const dist = './dist';
module.exports = [
    {
        mode: MODE,
        entry: {
            'js/main': `${src}/js/main/index.js`
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(dist),
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test:/\.js$/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                }
            ]
        },
        target: 'electron-main'
    },
    {
        mode: MODE,
        entry: {
            'js/renderer': `${src}/js/renderer/index.js`
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(dist),
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test:/(\.js$|\.jsx$)/,
                    use: [
                        {
                            loader: 'babel-loader',
                        }
                    ],
                    exclude: /node_modules/
                }
            ]
        },
        devServer: { 
            contentBase: path.resolve(dist),
            historyApiFallback: true,
            // inline: true,
            // hot: true
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'dist/index.html',
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        target: 'web',
        resolve: {
            extensions: ['.js', '.jsx']
        }
    }
]