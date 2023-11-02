const path = require('path')
module.exports = {
    mode: 'none',
    entry: './src/app', // 指定入口文件
    output: {
        path: path.resolve(__dirname), // 指定打包文件的目录
        filename: 'bundle.js' // 打包后文件的名称
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/, // 指定规则生效的文件：以ts结尾的文件
                use: 'ts-loader', // 要使用的loader
            }
        ]
    },  // 设置哪些文件类型可以作为模块被引用
    resolve: {
        extensions: ['.ts', '.js'],
    }
}