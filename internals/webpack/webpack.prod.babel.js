// Important modules this config uses
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin');
const { HashedModuleIdsPlugin } = require('webpack');
// const TerserPlugin = require('terser-webpack-plugin');
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = require('./webpack.base.babel')({
    mode: 'production',

    entry: [
        // require.resolve('react-app-polyfill/ie11'),
        path.join(process.cwd(), 'app/app.js'),
    ],

    output: {
        filename: '[name].[chunkhash].js',
        chunkFilename: '[name].[chunkhash].chunk.js',
    },

    optimization: {
        minimize: true,
        minimizer: [
            // new TerserPlugin({
            //     terserOptions: {
            //         warnings: false,
            //         compress: {
            //             comparisons: false,
            //         },
            //         parse: {},
            //         mangle: true,
            //         output: {
            //             comments: false,
            //             ascii_only: true,
            //         },
            //     },
            //     parallel: true,
            //     cache: true,
            //     sourceMap: true,
            // }),
        ],
        nodeEnv: 'production',
        sideEffects: true,
        concatenateModules: true,
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
                main: {
                    chunks: 'all',
                    minChunks: 2,
                    reuseExistingChunk: true,
                    enforce: true,
                },
            },
        },
        runtimeChunk: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true,
        }),

        new OfflinePlugin({
            relativePaths: false,
            publicPath: '/',
            appShell: '/',
            excludes: ['.htaccess'],
            caches: {
                main: [':rest:'],
                additional: ['*.chunk.js'],
            },
            safeToUseOptionalCaches: true,
        }),
        // new CompressionPlugin({
        //     algorithm: 'gzip',
        //     test: /\.js$|\.css$|\.html$/,
        //     threshold: 10240,
        //     minRatio: 0.8,
        // }),
        new WebpackPwaManifest({
            name: 'React Template',
            short_name: 'React TP',
            description: 'beautiful',
            background_color: '#fafafa',
            theme_color: '#b1624d',
            inject: true,
            ios: true,
            icons: [
                {
                    src: path.resolve('app/images/icon-512x512.png'),
                    sizes: [
                        72,
                        96,
                        120,
                        128,
                        144,
                        152,
                        167,
                        180,
                        192,
                        384,
                        512,
                    ],
                },
            ],
        }),

        new HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20,
        }),
    ],

    performance: {
        assetFilter: (assetFilename) =>
            !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
    },
});
