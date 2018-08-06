const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: __dirname + '/public',
        filename: 'build.js'
    },
    devtool: 'eval-map-source',
    devServer: {
        contentBase: path.join(__dirname,'public'),
        port: 8000,
        historyApiFallback: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015','react','stage-0']
                    }
                }
            }     
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}