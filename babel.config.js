module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
            },
        ],
        '@babel/preset-react',
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-transform-react-jsx-source',
        '@babel/plugin-proposal-json-strings',
        '@babel/plugin-transform-runtime',
        [
            'import',
            {
                libraryName: 'antd',
                libraryDirectory: 'lib',
                style: 'css',
            },
            'ant',
        ],
    ],
    env: {
        production: {
            only: ['app'],
            plugins: [
                'lodash',
                'transform-react-remove-prop-types',
                '@babel/plugin-transform-react-inline-elements',
                '@babel/plugin-transform-react-constant-elements',
            ],
        },
        test: {
            plugins: [
                '@babel/plugin-transform-modules-commonjs',
                'dynamic-import-node',
                'dynamic-import-node-babel-7',
            ],
        },
    },
};
