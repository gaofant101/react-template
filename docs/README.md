# Documentation

## Table of Contents

- [Styling (CSS)](css/README.md)
  - [Next Generation CSS](css/README.md#next-generation-css)
  - [CSS Support](css/README.md#css-we-support)
  - [styled-components](css/README.md#styled-components)
  - [Stylesheet](css/README.md#stylesheet)
  - [CSS Modules](css/README.md#css-modules)
  - [Sass](css/README.md#sass)
  - [LESS](css/README.md#less)
- [JS](js)
  - [Redux](js/redux.md)
  - [ImmutableJS](js/immutablejs.md)
  - [reselect](js/reselect.md)
  - [redux-saga](js/redux-saga.md)
  - [i18n](js/i18n.md)
  - [routing](js/routing.md)
- [Maintenance](maintenance)
  - [Dependency Update](maintenance/dependency.md)

## Overview

### Structure

The [`app/`](../../../tree/master/app) directory contains your entire application code, including CSS,
JavaScript, HTML and tests.

The rest of the folders and files only exist to make your life easier, and
should not need to be touched.

*(If they do have to be changed, please [submit an issue](https://github.com/react-boilerplate/react-boilerplate/issues)!)*

### CSS

Utilising [tagged template literals](https://www.styled-components.com/docs/advanced#tagged-template-literals)
(a recent addition to JavaScript) and the [power of CSS](https://github.com/styled-components/styled-components/blob/master/docs/css-we-support.md),
`styled-components` allows you to write actual CSS code to style your components.
It also removes the mapping between components and styles – using components as a
low-level styling construct could not be easier!

See the [CSS documentation](./css/README.md) for more information.

### JS

We bundle all your clientside scripts and chunk them into several files using
code splitting where possible. We then automatically optimize your code when
building for production so you don't have to worry about that.

See the [JS documentation](./js/README.md) for more information about the
JavaScript side of things.

### SEO

We use [react-helmet](https://github.com/nfl/react-helmet) for managing document head tags. Examples on how to
write head tags can be found [here](https://github.com/nfl/react-helmet#examples).
