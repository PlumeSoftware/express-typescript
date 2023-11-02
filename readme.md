# Express TypeScript

这是一个基于Express的后端开发框架，支持TypeScript，并使用Webpack进行打包。

## 特性

- 使用Express，一个快速、不对你的应用程序结构做任何假设的最小化Web应用框架。
- 支持TypeScript，一个JavaScript的超集，添加了静态类型和其他特性，增强了代码的可读性和可维护性。
- 使用Webpack进行打包，一个静态模块打包器，当Webpack处理应用程序时，它会在内部建立一个依赖图，将所有模块映射到输出bundle。

## 快速开始

1. 克隆本仓库

```bash
git clone https://github.com/PlumeSoftware/express-typescript
```

2. 安装依赖

```bash
cd express-typescript
npm install
```

3. 运行开发服务器

```bash
npm run dev
```

现在，你可以在浏览器中访问 `http://localhost:3000` 来查看你的应用。

## 脚本

在项目目录中，你可以运行以下脚本：

- `npm run dev`：在开发模式下运行应用。
- `npm run build`：打包应用为生产环境。

## 目录结构

```
.
├── src/               # 源代码目录
│   ├── [module]/      # 模块目录
│   ├── common/        # 通用方法
│   ├── middleware/    # 中间件
│   └── app.ts         # 应用入口
├── dist/              # 打包后的文件
├── node_modules/      # Node.js模块
├── package.json       # Node.js manifest
├── tsconfig.json      # TypeScript 配置文件
├── webpack.config.js  # Webpack 配置文件
├── README.md          # 项目说明文件
└── .env               # 环境变量

```

## 贡献

欢迎对本项目做出贡献。在提交Pull Request之前，请确保你已经运行了全套的测试，并且所有的测试都通过了。

## 许可

本项目采用MIT许可证，详情请参见 [LICENSE](LICENSE) 文件。

## 联系

如果你在使用过程中遇到问题，或者有任何的建议和意见，欢迎通过email (corfer@yeah.com) 或者在GitHub上提issue与我联系。