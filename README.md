# ReactJS开发起步应用

工程使用[Create React App](https://github.com/facebookincubator/create-react-app)创建，相关文档[README](./README-ORI.md)。

该工程使用了Redux,ReactRouter4,均已经安装配置好。可以作为reactjs程序的一个起点。

## 开发环境安装

```sh
npm install -g node
npm install -g yarn
npm install -g create-react-app
yarn install
```

## 开发环境的启动

```sh
yarn start
```

然后在浏览器中打开[http://localhost:3000](http://localhost:3000)

当代码发生改变的时候，浏览器会自动reload。

当代吗发生错误的时候，在浏览器中会显示错误信息和错误位置。


```sh
yarn test
```

进入测试模式。详细文档: [run tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

```sh
yarn run build
```

执行后会在build文件夹中生成可以部署的应用。代码经过压缩和优化。
关于部署详情：[deployment](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)

## 编辑器开发环境

建议选择Sublime3并安装babel-sublime插件

相关文档：

1. [代码高亮](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#syntax-highlighting-in-the-editor)
2. [语法错误显示](ihttps://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#displaying-lint-output-in-the-editor)
3. [自动格式化代码](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#formatting-code-automatically)

## 涉及到的相关技术
- (Redux)[http://redux.js.org/]
- (ReactRouter)[https://reacttraining.com/react-router/]
- (ImmutableJS)[https://facebook.github.io/immutable-js/]








