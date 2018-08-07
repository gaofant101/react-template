/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Remove this line once the following warning goes away (it was meant for webpack loader authors not users):
// 'DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic,
// see https://github.com/webpack/loader-utils/issues/56 parseQuery() will be replaced with getOptions()
// in the next major version of loader-utils.'
process.noDeprecation = true;

const theme = require(path.resolve(process.cwd(), 'app/assets/style/theme.js'));

module.exports = (options) => ({
    mode: options.mode,
    entry: options.entry,
    output: Object.assign(
        {
            // Compile into js/build.js
            path: path.resolve(process.cwd(), 'build'),
            publicPath: '/',
        },
        options.output,
    ), // Merge with env dependent settings
    optimization: options.optimization,
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                include: [path.resolve(__dirname, '../../app')],
                use: {
                    loader: 'eslint-loader',
                    options: {
                        cache: true,
                        // formatter: eslintfriendlyformatter,
                    },
                },
            },
            {
                test: /\.js$/, // Transform all .js files required somewhere with Babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: options.babelQuery,
                },
            },
            {
                // Preprocess our own .css files
                // This is the place to add your own loaders (e.g. sass/less etc.)
                // for a list of loaders, see https://webpack.js.org/loaders/#styling
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            mportLoaders: 1,
                            localIdentName: '[local]__[hash:base64:5]',
                        },
                    },
                    'postcss-loader',
                ],
            },
            {
                // Preprocess 3rd party .css files located in node_modules
                test: /\.css/,
                include: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.less$/,
                include: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            // paths: [
                            //     path.resolve(__dirname, 'node_modules'),
                            // ],
                            modifyVars: theme,
                        },
                    },
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
                    // {
                    //     loader: 'url-loader',
                    //     options: {
                    //         // Inline files smaller than 10 kB
                    //         limit: 10 * 1024,
                    //     },
                    // },
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
                    'file-loader',
                ],
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
            {
                test: /\.html$/,
                use: 'html-loader',
            },
        ],
    },
    plugins: options.plugins.concat([
        // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
        // inside your code for any environment checks; UglifyJS will automatically
        // drop any unreachable code.
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
        alias: {
            moment$: 'moment/moment.js',
            assets: path.resolve(__dirname, '../../app/assets'),
            axiosBasic: path.resolve(__dirname, '../../app/axiosBasic'),
            reduxs: path.resolve(__dirname, '../../app/reduxs'),
            components: path.resolve(__dirname, '../../app/components'),
            containers: path.resolve(__dirname, '../../app/containers'),
            layouts: path.resolve(__dirname, '../../app/layouts'),
            routers: path.resolve(__dirname, '../../app/routers'),
            services: path.resolve(__dirname, '../../app/services'),
            utils: path.resolve(__dirname, '../../app/utils'),
        },
        extensions: ['.js', '.jsx', '.react.js'],
        mainFields: ['browser', 'jsnext:main', 'main'],
    },
    devtool: options.devtool,
    target: 'web', // Make web variables accessible to webpack, e.g. window
    performance: options.performance || {},
});
