var path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	cache: true,
	context: path.join(__dirname, '/frontend'),
    entry: 'src/app.jsx',
    output: {
        filename: './frontend/build/app.js'
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js|es6)$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: [
                        'babel-preset-react',
                        'babel-preset-es2015'
                    ],
                    plugins: [
                        'babel-plugin-external-helpers-2',
                        'babel-plugin-transform-runtime',
                        'syntax-decorators',
                        'transform-class-properties',
                        'transform-object-rest-spread'
                    ]
                }
            }, {
                test: /\.scss$/,
                loader:  ExtractTextPlugin.extract('style-loader', 'css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./frontend/build/app.css')
    ],
    resolve: {
    	root: path.join(__dirname, '/frontend'),
        extensions: ['', '.jsx', '.js', '.es6', '.sass']
    }
}
