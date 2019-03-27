const webpack = require('webpack')

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')

const { complates } = require('./complate');

module.exports = [
    ...complates,
    new MiniCssExtractPlugin({
        filename: "[name]/index.css",
        chunkFilename: "[id].css",
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify( process.env.NODE_ENV )
    }),
    new CleanWebpackPlugin(), //传入数组,指定要删除的目录
    // 开启大名鼎鼎的热更新插件
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
]