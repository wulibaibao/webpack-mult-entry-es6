const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = [
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ["@babel/preset-env", "@babel/preset-react"],//,
                // plugins: ['@babel/plugin-transform-runtime']
            }
        }
    },
    {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]//处理css
    },
    {
        test:/\.(png|jpg|gif)$/,
        use:[{
            loader:'url-loader',
            options:{
                outputPath:'img/',//输出到images文件夹
                limit:500  //是把小于500B的文件打成Base64的格式，写入JS
            }
        }]
    },
    {
        test: /\.scss$/,
        use: [
            // fallback to style-loader in development
            process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
    }
]