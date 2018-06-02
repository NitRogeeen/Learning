const path = require('path');

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
            path: path.resolve(dist)
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
            path: path.resolve(dist)
        },
        module: {
            rules: [
                {
                    test:/(\.js$|\.jsx$)/,
                    use: [
                        {
                            loader: 'babel-loader'
                        }
                    ]
                }
            ]
        },
        target: 'web',
        resolve: {
            extensions: ['.js', '.jsx']
        }
    }
]