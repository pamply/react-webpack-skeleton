const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
    entry: './src',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env', 'babel-preset-react']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname),
        port: 9000
    }
}