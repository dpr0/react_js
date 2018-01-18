/* eslint-disable */
import path from 'path';
import webpack from 'webpack';

const root = path.join(process.cwd(), 'src');

export default {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        './src/index.js'
        // 'webpack-dev-server/client?http://localhost:3100',
        // 'webpack/hot/only-dev-server',
    ],
    output: {
        path: path.join(process.cwd(), 'dist'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1'
                ]
            },
            {
                test: /\.(eot|png|ttf|svg|woff|woff2)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        modules: ['./src', 'node_modules'],
    },
    plugins: [
        new webpack.DefinePlugin({
          __SERVER__: true,
          __CLIENT__: false,
          __DEVELOPMENT__: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};