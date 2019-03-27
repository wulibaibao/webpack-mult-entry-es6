const rules = require( './config/rules' ) 
const plugins = require( './config/plugins') 

const path = require('path');

const { entry } = require('./config/complate');

module.exports = {
    entry,
    output:{
        //输出的路径，用了Node语法
        path:path.resolve(__dirname,'dist'),
        //输出的文件名称
        filename:'[name]/index.js'
    },
    // 解析
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules,
    },
    plugins,
    devServer: {//配置此静态文件服务器，可以用来预览打包后项目
        inline:true,//打包后加入一个websocket客户端
        hot:true,//热加载
        contentBase: path.resolve(__dirname, 'dist'),//开发服务运行时的文件根目录
        host: 'localhost',//主机地址
        port: 9090,//端口号
        compress: true//开发服务器是否启动gzip等压缩
    }
}