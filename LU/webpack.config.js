var webpack = require("webpack");
var htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    devServer: {
        port: "9090",
        host: "127.0.0.1",
        hot: true,
    },
    module: {//加载器
        rules: [{
            test: /\.js$/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }, {
            test: /\.html$/,
            loader: "html-loader"
        }, {
            test: /\.vue$/,
            loader: "vue-loader"
        }, {
            test: /\.jpg | .png$/,
            loader: "url-loader"
        }, ]
    },
    resolve: {
        alias: {
            vue: "vue/dist/vue.js"
        }
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({//压缩
            name: "commons",
            filename: "commons.js"
        })
        new htmlWebpackPlugin({
            template: "./index.html"
        }),
    ]
}