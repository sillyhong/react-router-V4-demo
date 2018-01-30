const path = require('path')


module.exports = {
    entry: {
        entry: './app/entry.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: "temp/"//修改内存地址
    },
    module:{
        loaders: [{
            test:/\.(jsx|js)$/,
            exclude: '/node_module/',
            loaders: 'babel-loader',
            query: {
                presets:['es2015', 'react'],
            }
        },{
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }]
    },
    devServer: {
        contentBase: './',
        host: 'localhost',
        compress: true,
        port: 8080
    }
}