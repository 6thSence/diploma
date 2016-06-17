const autoprefixer = require('autoprefixer');
const nested = require('postcss-nested');
const assets = require('postcss-assets');
const short = require('postcss-short');
const reporter = require('postcss-browser-reporter');
const stylelint = require('stylelint');
const rulesStyles = require('./stylelintrc.json');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
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
                test: /\.(jpg|png|jpeg|gif|ico|woff|svg|woff2|eot|otf)$/,
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