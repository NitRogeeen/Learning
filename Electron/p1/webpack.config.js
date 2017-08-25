const path = require('path');

module.exports = {
    entry: "./js/renderer/components/index.js", // どのjsファイルをルートにするか
    output: {
        path: __dirname + "/build", // ファイルパス
        filename: "bundle.js", // ファイル名
        libraryTarget: 'commonjs2', // モジュールを呼ぶための方式を指定*1
    },
    module: {
        loaders: [ // loaderをカキカキ...
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: "/node_modules/",
                query: {
                    presets: ["es2015","react"] // es2015とreact使うよと...
                }
            }
        ]
    },
    externals: [ // こいつらは一つにしません！*2
      'electron',
      'fs'
    ]
};