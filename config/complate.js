const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const fs = require('fs')
const DIRNAME_SRC = path.resolve('src')

let complates = [], entry = {};

const mp = fs.readdirSync( DIRNAME_SRC ).filter( item => item.indexOf('.') === -1 )

mp.map( item => {
    complates.push(
        new HtmlWebpackPlugin(
            { //可以模板，直接引用files对象，是webpack中state对象
                title: item,
                chunks: [ item ],
                filename: `${ item }/index.html`,
                template : path.join( DIRNAME_SRC , path.join( item , 'index.html') )
            }
        )
    )
    entry[ item ] = path.join( DIRNAME_SRC , path.join( item , 'index.js') )
})

module.exports = {
    complates , entry 
}