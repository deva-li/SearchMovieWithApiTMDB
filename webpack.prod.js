//mode production adalah dimana saat mementingkan bundling dan kompatibilitas web
const {merge} = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
    module: { //loader
        rules: [
            {
                test: /\.js$/, //file js yang akan diubah
                exclude: "/node_modules/",//mengecualikan file yang akan di ubah
                use: [
                    {
                        loader: "babel-loader",
                        options: { //setting untuk loader
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    }
 })