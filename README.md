## 简介

- [ ] react [16.2.0]()
- [ ] react-dom [16.2.0]()
- [ ] prop-types [15.6.0]()
- [ ] react-router-dom [4.2.2]()
- [ ] redux [3.7.2]()
- [ ] react-redux [5.0.6]()
- [ ] redux-thunk [2.2.0]()
- [ ] ant-design [3.1.1]()
- [ ] axios [0.17.0]()
- [ ] postcss []()
- [ ] css-modules
- [ ] airbnb-eslit
- [ ] pre-commit

## 使用

```JavaScript
npm install             下载依赖包
npm run build:dll       生成链接库
npm run dev             启动本地服务
npm run build           打包编译
```

#### `Tips`

```
npm install 也可以替换成 yarn

或者修改官方的源 npm config set registry http://registry.npm.taobao.org/

修改源地址为官方源 npm config set registry https://registry.npmjs.org/
```

## 配置

#### 修改服务端口   

```JavaScript
server\port.js -> 3000
```

#### 修改代理配置

```JavaScript
server\middlewares\addDevMiddlewares.js
->
proxyHost &&　proxyPort

// 代理设置参考https://github.com/react-boilerplate/react-boilerplate/pull/679

```

#### 配置`https`服务

Express over HTTPS `http://blog.mgechev.com/2014/02/19/create-https-tls-ssl-application-with-express-nodejs/`

## 文档

`react` 文档 `https://reactjs.org/`

`react-router` 文档 `http://reacttraining.cn/web/example/basic`

`redux` 文档 `http://cn.redux.js.org/docs/introduction/Motivation.html`

`antd` 文档 `https://ant.design/index-cn`

`axios` 文档 `https://github.com/axios/axios`

`How to integrate AntD with Webpack2`  `https://github.com/ant-design/ant-design/issues/4491`

## 记录

#### `ESLint` 规则

- 规则 `http://blog.guowenfh.com/2016/08/07/ESLint-Rules`
- `ES6` 箭头函数语法 `http://es6.ruanyifeng.com/#docs/function#箭头函数`
- `Unexpected block statement surrounding arrow body arrow-body-style` 报错 `https://github.com/eslint/eslint/issues/5498`

#### `webpack`
- `Webpack3` 新特性 `https://juejin.im/entry/5948b991ac502e006bb3baa8`
- `Webpack2` 的新特性 `http://www.aliued.com/?p=4060`
- `WebPack 2: Migrate preLoaders and postLoaders`  `http://stackoverflow.com/questions/40653936/webpack-2-migrate-preloaders-and-postloaders`

#### 记`pro-commit`钩子错误

- `lint-staged` 查看匹配规则 `https://github.com/okonet/lint-staged`

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

## Features

<dl>
  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more, today.</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Industry-standard i18n internationalization support</dt>
  <dd>Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.</dd>

  <dt>Offline-first</dt>
  <dd>The next frontier in performant web apps: availability without a network connection from the instant your users load the app.</dd>

  <dt>SEO</dt>
  <dd>We support SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

But wait... there's more!

  - *The best test setup:* Automatically guarantee code quality and non-breaking
    changes. (Seen a react app with 99% test coverage before?)
  - *Native web app:* Your app's new home? The home screen of your users' phones.
  - *The fastest fonts:* Say goodbye to vacant text.
  - *Stay fast*: Profile your app's performance from the comfort of your command
    line!
  - *Catch problems:* AppVeyor and TravisCI setups included by default, so your
    tests get run automatically on Windows and Unix.

There’s also a <a href="https://vimeo.com/168648012">fantastic video</a> on how to structure your React.js apps with scalability in mind. It provides rationale for the majority of boilerplate's design decisions.

<sub><i>Keywords: React.js, Redux, Hot Reloading, ESNext, Babel, react-router, Offline First, ServiceWorker, `styled-components`, redux-saga, FontFaceObserver</i></sub>

## Quick start

1. Clone this repo using `git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git`
2. Move to the appropriate directory: `cd react-boilerplate`.<br />
3. Run `npm run setup` in order to install dependencies and clean the git repo.<br />
   *We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`*<br />
   *At this point you can run `npm start` to see the example app at `http://localhost:3000`.*
4. Run `npm run clean` to delete the example app.

Now you're ready to rumble!

> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.

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
