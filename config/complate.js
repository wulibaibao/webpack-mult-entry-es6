const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

const pages = [
    {
        name : 'home' ,
        title : '',
    },
    {
        name : 'app' ,
        title : '',
    },
]

let complates = []
let entry = {}

for( let x of pages ) {
    complates.push(
        new HtmlWebpackPlugin(
            { //可以模板，直接引用files对象，是webpack中state对象
                title: x.title ? x.title : x.name,
                chunks: [ x.name ],
                filename: `${ x.name }/index.html`,
                template : `${ path.resolve( 'src' ) }/${ x.name }/index.html`
            }
        )
    )

    entry[ x.name ] = `${ path.resolve( 'src' ) }/${ x.name }/index.js`
}

module.exports = {
    complates,
    entry,
}