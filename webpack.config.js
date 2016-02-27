var path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	cache: true,
	context: path.join(__dirname, '/frontend'),
    entry: 'src/app.jsx',
    output: {
        filename: './frontend/build/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|es6)$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: [
                    	'babel-preset-es2015',
                        'babel-preset-react'
                    ],
                    plugins: [
                        'babel-plugin-external-helpers-2',
                        'babel-plugin-transform-runtime',
                        'syntax-decorators',
                        'transform-class-properties'
                    ]
                }
            }, {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./frontend/build/app.css", {
            allChunks: true
        })
    ],
    resolve: {
    	root: path.join(__dirname, '/frontend'),
        extensions: ['', '.js', '.jsx', '.es6', '.sass']
    }
}
