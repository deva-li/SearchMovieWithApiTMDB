//mode development iyalah mode pengembangan yang selalu optimal untuk mempercepat perubahan
const {merge} = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {  //agar berada pada mode development
    mode: "development"
})