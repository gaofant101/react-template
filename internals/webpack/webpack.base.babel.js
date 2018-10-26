/**
 * COMMON WEBPACK CONFIGURATION
 */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

process.noDeprecation = true;

module.exports = (options) => ({
    mode: options.mode,
    entry: options.entry,
    output: Object.assign(
        {
            path: path.resolve(process.cwd(), 'build'),
            publicPath: '/',
        },
        options.output,
    ),
    optimization: options.optimization,
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                include: [path.resolve(process.cwd(), 'app')],
                use: {
                    loader: 'eslint-loader',
                    options: {
                        cache: true,
                    },
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: options.babelQuery,
                },
            },
            {
                // Preprocess 3rd party .css files located in node_modules
                test: /\.css/,
                include: /node_modules/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            mportLoaders: 1,
                            localIdentName: '[local]_[hash:base64:5]',
                        },
                    },
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2)$/,
                use: 'file-loader',
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: 'svg-url-loader',
                        options: {
                            // Inline files smaller than 10 kB
                            limit: 10 * 1024,
                            noquotes: true,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // Inline files smaller than 10 kB
                            limit: 10 * 1024,
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                enabled: false,
                                // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
                                // Try enabling it in your environment by switching the config to:
                                // enabled: true,
                                // progressive: true,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            optipng: {
                                optimizationLevel: 7,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: 'html-loader',
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    },
                },
            },
        ],
    },
    plugins: options.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        }),
    ]),
    resolve: {
        modules: ['node_modules', 'app'],
        extensions: ['.js', '.jsx', '.react.js'],
        mainFields: ['browser', 'jsnext:main', 'main'],
        alias: {
            moment$: 'moment/moment.js',
            '@assets': path.resolve(process.cwd(), 'app/assets'),
            '@reduxs': path.resolve(process.cwd(), 'app/reduxs'),
            '@components': path.resolve(process.cwd(), 'app/components'),
            '@containers': path.resolve(process.cwd(), 'app/containers'),
            '@layouts': path.resolve(process.cwd(), 'app/layouts'),
            '@routers': path.resolve(process.cwd(), 'app/routers'),
            '@services': path.resolve(process.cwd(), 'app/services'),
            '@utils': path.resolve(process.cwd(), 'app/utils'),
        },
    },
    devtool: options.devtool,
    target: 'web', // Make web variables accessible to webpack, e.g. window
    performance: options.performance || {},
});
