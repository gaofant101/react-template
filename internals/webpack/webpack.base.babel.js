/**
 * COMMON WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const eslintfriendlyformatter = require('eslint-friendly-formatter');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const theme = require(path.resolve(process.cwd(), 'theme.js'));

// Remove this line once the following warning goes away (it was meant for webpack loader authors not users):
// 'DeprecationWarning: loaderUtils.parseQuery() received a non-string value which can be problematic,
// see https://github.com/webpack/loader-utils/issues/56 parseQuery() will be replaced with getOptions()
// in the next major version of loader-utils.'
process.noDeprecation = true;
// 创建多个实例
const extractCSS = new ExtractTextPlugin('layout.[chunkhash].css');
const extractLESS = new ExtractTextPlugin('antd.[chunkhash].css');

module.exports = (options) => ({
    entry: options.entry,
    output: Object.assign({ // Compile into js/build.js
        path: path.resolve(process.cwd(), 'build'),
        publicPath: '/',
    }, options.output), // Merge with env dependent settings
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                include: [
                    path.resolve(__dirname, '../../app'),
                ],
                use: {
                    loader: 'eslint-loader',
                    options: {
                        cache: true,
                        formatter: eslintfriendlyformatter,
                    },
                },
            }, {
                test: /\.js$/, // Transform all .js files required somewhere with Babel
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: options.babelQuery,
                },
            }, {
                // Preprocess our own .css files
                // This is the place to add your own loaders (e.g. sass/less etc.)
                // for a list of loaders, see https://webpack.js.org/loaders/#styling
                test: /\.css$/,
                exclude: /node_modules/,
                use: extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                importLoaders: 1,
                                localIdentName: '[name]__[local]__[hash:base64:8]',
                            },
                        },
                        'postcss-loader',
                    ],
                }),
            }, {
                test: /\.less$/,
                use: extractLESS.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader', {
                            loader: 'less-loader',
                            options: {
                                paths: [path.resolve(__dirname, '../../node_modules')],
                                modifyVars: theme,
                            },
                        },
                    ],
                }),
            }, {
                test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
                use: 'file-loader',
            }, {
                test: /\.(jpg|png|gif)$/,
                use: [
                    'file-loader', {
                        loader: 'image-webpack-loader',
                        options: {
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
                use: 'html-loader',
            }, {
                test: /\.json$/,
                use: 'json-loader',
            }, {
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

        // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
        // inside your code for any environment checks; UglifyJS will automatically
        // drop any unreachable code.
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new webpack.NamedModulesPlugin(),
        extractLESS,
        extractCSS,
        new ExtractTextPlugin({
            filename: (getPath) =>
                getPath('[name].[chunkhash].css').replace('css/js', 'css'),
            allChunks: true,
        }),
    ]),
    resolve: {
        modules: [
            'app', 'node_modules',
        ],
        alias: {
            moment$: 'moment/moment.js',
            axioss: path.resolve(__dirname, '../../app/axioss'),
            reduxX: path.resolve(__dirname, '../../app/reduxs'),
        },
        extensions: [
            '.js', '.jsx', '.react.js',
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
