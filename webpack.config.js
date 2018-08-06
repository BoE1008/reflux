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
        hot: true,
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react','stage-0']
                    }
                },
                exclude: /node_modules/
            },{
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}