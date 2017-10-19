## 简介

基于 `react-boilerplate` 进行二次开发的 `react-template`
- 引入 `Ant-Design`
- 启用 `CSS-MODULE` ,引入 `LESS` ;弃用 `styled-components`
- 引入 `postcss` 解决 `css` 兼容问题
- 修改 `eslit` 配置, 改变空格风格, 以及引入 `antd` 报错问题
- 配置 `git` 钩子 `commit` 调用 `eslint` 检测
- 引入 `http-proxy-middleware` 解决代理问题
- 引入 `friendly-errors-webpack-plugin` 插件,让命令行更友好

## 使用

- `npm install` 更新下载模块
- `npm run build:dll` 生成链接库 || 资源文件有更新时需要重新生成
- `npm run dev` 启动本地服务
- `npm run build` 编译发布文件

#### `Tips`

- `npm install` 也可以替换成 `yarn` ,

- 或者修改官方的源 `npm config set registry http://registry.npm.taobao.org/`

- 修改源地址为官方源 `npm config set registry https://registry.npmjs.org/`


## 配置

#### 修改服务端口   

`server\port.js` -> `3000`

#### 修改代理配置

`server\middlewares\addDevMiddlewares.js` -> `proxyHost &&　proxyPort`

代理设置参考`https://github.com/react-boilerplate/react-boilerplate/pull/679`


## 文档

`react-router 文档 https://react-guide.github.io/react-router-cn/docs/Introduction.html`

`redux 文档 http://cn.redux.js.org/docs/introduction/Motivation.html`

`antd 文档 https://design.alipay.com/`

`axios 文档 https://github.com/axios/axios`

`How to integrate AntD with Webpack2 https://github.com/ant-design/ant-design/issues/4491`

## 记录

#### `ESLint` 规则

- 规则 `http://blog.guowenfh.com/2016/08/07/ESLint-Rules`

- `ES6` 箭头函数语法 `http://es6.ruanyifeng.com/#docs/function#箭头函数`

- `Unexpected block statement surrounding arrow body arrow-body-style` 报错 `https://github.com/eslint/eslint/issues/5498`

#### `webpack`
- `Webpack3` 新特性 `https://juejin.im/entry/5948b991ac502e006bb3baa8`
- `Webpack2` 的新特性 `http://www.aliued.com/?p=4060`
- `WebPack 2: Migrate preLoaders and postLoaders`  `http://stackoverflow.com/questions/40653936/webpack-2-migrate-preloaders-and-postloaders`



## 官方 `CLI`

<img src="https://raw.githubusercontent.com/react-boilerplate/react-boilerplate-brand/master/assets/banner-metal-optimized.jpg" alt="react boilerplate banner" align="center" />

<br />

<div align="center"><strong>Start your next react project in seconds</strong></div>
<div align="center">A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices</div>

<br />

<div align="center">
  <!-- Dependency Status -->
  <a href="https://david-dm.org/react-boilerplate/react-boilerplate">
    <img src="https://david-dm.org/react-boilerplate/react-boilerplate.svg" alt="Dependency Status" />
  </a>
  <!-- devDependency Status -->
  <a href="https://david-dm.org/react-boilerplate/react-boilerplate#info=devDependencies">
    <img src="https://david-dm.org/react-boilerplate/react-boilerplate/dev-status.svg" alt="devDependency Status" />
  </a>
  <!-- Build Status -->
  <a href="https://travis-ci.org/react-boilerplate/react-boilerplate">
    <img src="https://travis-ci.org/react-boilerplate/react-boilerplate.svg" alt="Build Status" />
  </a>
  <!-- Test Coverage -->
  <a href="https://coveralls.io/r/react-boilerplate/react-boilerplate">
    <img src="https://coveralls.io/repos/github/react-boilerplate/react-boilerplate/badge.svg" alt="Test Coverage" />
  </a>
</div>
<div align="center">
    <!-- Backers -->
  <a href="#backers">
    <img src="https://opencollective.com/react-boilerplate/backers/badge.svg" alt="Backers" />
  </a>
      <!-- Sponsors -->
  <a href="#sponsors">
    <img src="https://opencollective.com/react-boilerplate/sponsors/badge.svg" alt="Sponsors" />
  </a>
  <a href="http://thinkmill.com.au/?utm_source=github&utm_medium=badge&utm_campaign=react-boilerplate">
    <img alt="Supported by Thinkmill" src="https://thinkmill.github.io/badge/heart.svg" />
  </a>
  <!-- Gitter -->
  <a href="https://gitter.im/mxstbr/react-boilerplate">
    <img src="https://camo.githubusercontent.com/54dc79dc7da6b76b17bc8013342da9b4266d993c/68747470733a2f2f6261646765732e6769747465722e696d2f6d78737462722f72656163742d626f696c6572706c6174652e737667" alt="Gitter Chat" />
  </a>
</div>

<br />

<div align="center">
  <sub>Created by <a href="https://twitter.com/mxstbr">Max Stoiber</a> and maintained with ❤️ by an amazing <a href="https://github.com/orgs/react-boilerplate/teams/core">team of developers</a>.</sub>
</div>

## Documentation

- [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
- [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.

## License

This project is licensed under the MIT license, Copyright (c) 2017 Maximilian
Stoiber. For more information see `LICENSE.md`.
