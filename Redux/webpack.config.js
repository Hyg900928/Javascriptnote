const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = (dir) => path.join(__dirname, dir);

const config = {
    mode: 'development',
    name: 'client',
    target: 'web',
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx']
    },
    entry: {
        index: './index.js',
    },
    output: {
        filename: 'bundle.js',
        path: resolve('dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
                
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'output.html',
            template: './index.html',
            title: 'redux-learn'
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
        host: '0.0.0.0',
        contentBase: 'dist',
        historyApiFallback: true,
        port: 8000
    }
}

module.exports = config