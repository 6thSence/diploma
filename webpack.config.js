const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const assets = require('postcss-assets');
const short = require('postcss-short');
const reporter = require('postcss-browser-reporter');
const stylelint = require('stylelint');
const rulesStyles = require('./stylelintrc.json');
const webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/entry'
    ],
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader',
                exclude: /node_modules/
            },
            { test: /.js?$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(jpg|png|jpeg|gif|ico|woff|svg|woff2|eot)$/,
                loader: 'file-loader'
            }
        ]
    },
    postcss: () => {
        return [
            nested,
            short,
            assets,
            stylelint(rulesStyles),
            autoprefixer,
            reporter()
        ];
    }
};