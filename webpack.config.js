const webpack = require('webpack')
const path = require('path')

const parentDir = path.join(__dirname, '../')

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: [
        './leadmanager/frontend/src/index.jsx'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/react',
                                '@babel/env'
                            ]
                        }
                    },
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, '/leadmanager/frontend/static/frontend/'),
        filename: 'main.js',
        publicPath: 'leadmanager/frontend/static/frontend'
    }
}