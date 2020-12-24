const HtmlWebpackPlugin = require("html-webpack-plugin"); //memanggil path html-webpack-plugin
const path = require("path"); //memanggil module path

module.exports = {
    entry: "./src/app.js", //nama file yng akan dibundle
    output: {
        path: path.resolve(__dirname, "dist"), //folder file setelah dibundle
        filename: "bundle.js"//nama file steleh dbundle
    },
    module:{//loader
        rules: [
            {
                test: /\.css$/, //file yang akan diubah ke  bundle selain javascript
                use: [
                    {
                        loader: "style-loader" //loader khusus style
                    },
                    {
                        loader: "css-loader" // loader khusus css
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",//file html yang akan dipindahkan
            filename: "index.html"//nama file html setelah dipindahkan ke folder dist pada entry
        })
    ]
}