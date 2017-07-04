/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const theme = require(path.resolve(process.cwd(), 'theme.js'));

module.exports = (options) => ({
    entry: options.entry,
    output: Object.assign({ // Compile into js/build.js
        path: path.resolve(process.cwd(), 'build'),
        publicPath: '/',
    }, options.output), // Merge with env dependent settings
    module: {
        loaders: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                include: [
                    path.resolve(__dirname, "../../app"),
                ],
                options: {
                    cache: true,
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.js$/, // Transform all .js files required somewhere with Babel
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: options.babelQuery,
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        query: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]__[local]__[hash:base64:8]",
                        },
                    },
                    {
                        loader: "postcss-loader",
                    },
                ]
            }, {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader",
                }, {
                    loader: "less-loader",
                    options: {
                        paths: [
                            path.resolve(__dirname, "../../node_modules"),
                        ],
                        modifyVars: theme
                    }
                }]
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
            }, {
                test: /\.(jpg|png|gif|ico)$/,
                loaders: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        query: {
                            progressive: true,
                            optimizationLevel: 7,
                            interlaced: false,
                            pngquant: {
                                quality: '65-90',
                                speed: 4,
                            },
                        },
                    },
                ],
            }, {
                test: /\.html$/,
                loader: 'html-loader',
            }, {
                test: /\.json$/,
                loader: 'json-loader',
            }, {
                test: /\.(mp4|webm)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                },
            }
        ],
    },
    plugins: options.plugins.concat([
        new webpack.ProvidePlugin({
        // make fetch available
            fetch: 'exports-loader?self.fetch!whatwg-fetch',
        }),

        // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
        // inside your code for any environment checks; UglifyJS will automatically
        // drop any unreachable code.
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new webpack.NamedModulesPlugin(),
    ]),
    resolve: {
        modules: ['app', 'node_modules'],
        alias: {
            moment$: 'moment/moment.js',
        },
        extensions: [
            '.js',
            '.jsx',
            '.react.js',
        ],
        mainFields: [
            'browser',
            'jsnext:main',
            'main',
        ],
    },
    devtool: options.devtool,
    target: 'web', // Make web variables accessible to webpack, e.g. window
    performance: options.performance || {},
});