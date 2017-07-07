## 使用说明

##### 使用NPM


修改源地址为淘宝 NPM 镜像

    npm config set registry http://registry.npm.taobao.org/

修改源地址为官方源

    npm config set registry https://registry.npmjs.org/

##### React 相关文档

[Redux-saga 中文文档](https://github.com/superRaytin/redux-saga-in-chinese)

[React-router](https://react-guide.github.io/react-router-cn/docs/Introduction.html)

[Redux 相关](http://cn.redux.js.org/docs/introduction/Motivation.html)

[sanitize.css](https://jonathantneal.github.io/sanitize.css/)

##### Antd 文档

[官方文档](https://ant.design/docs/react/introduce-cn)

##### 版本信息

    NODE >= v6.10.3
    NPM >= v3.10.10
    React 15.4.1
    React-dom 15.4.1
    React-router 3.0.0
    Antd ^2.10.1
    axios ^0.16.2

##### 启动

本地服务 `npm run dev`
编译发布 `npm run build`

##### 设置服务

修改端口号

`server` -> `middlewares` -> `frontendMiddleware.js` -> `const pxhost = '服务端ip'` `const pxport = '服务端端口'`

设置代理请参考  [Express proxy #679](https://github.com/react-boilerplate/react-boilerplate/pull/679)

##### 如果遇到任何问题请在gitlab中新建wiki

新建wiki的目的是为了记录并积累问题的发生过程,方便以后维护

##### 详解 ESLint 规则，规范你的代码

[讲解一](http://blog.guowenfh.com/2016/08/07/ESLint-Rules/)
[es6 箭头函数语法](http://es6.ruanyifeng.com/#docs/function#箭头函数)
[Unexpected block statement surrounding arrow body arrow-body-style 报错的解决例子](https://github.com/eslint/eslint/issues/5498)

##### webpack2

[Webpack2的新特性](http://www.aliued.com/?p=4060)

[WebPack 2: Migrate preLoaders and postLoaders](http://stackoverflow.com/questions/40653936/webpack-2-migrate-preloaders-and-postloaders)

##### FriendlyErrorsWebpackPlugin

待解决...

## CLI 官方

[官方GIT](https://github.com/react-boilerplate/react-boilerplate)

<img src="https://raw.githubusercontent.com/react-boilerplate/react-boilerplate-brand/master/assets/banner-metal-optimized.jpg" alt="react boilerplate banner" align="center" />

## Documentation

- [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.

## License

This project is licensed under the MIT license, Copyright (c) 2017 Maximilian
Stoiber. For more information see `LICENSE.md`.
