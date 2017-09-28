var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
// var data=require("./data/data.js");
module.exports = {
    entry: __dirname + "/src/main.js",
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.jpg|.png$/,
                use: ["url-loader"]
            },
            {
                test: /\.vue$/,
                use: ["vue-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
        ]
    },
    devServer:{
        host:"127.0.0.1",
        port:"9999",
        hot:true,
        contentBase:__dirname+"/src/static",
        watchContentBase:true
        // setup(app){
        //     app.get("/data",function(req,res){
        //         res.json(data);
        //     })
        // }

    },
    resolve:{
        alias:{
            "vue":"vue/dist/vue.js"
        }
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common"
        }),
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]


}