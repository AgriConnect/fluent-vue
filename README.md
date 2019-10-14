# fluent-vue

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/Demivan/fluent-vue.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/Demivan/fluent-vue.svg)](https://travis-ci.org/Demivan/fluent-vue)
[![Coveralls](https://img.shields.io/coveralls/Demivan/fluent-vue.svg)](https://coveralls.io/github/Demivan/fluent-vue)
[![Dev Dependencies](https://david-dm.org/Demivan/fluent-vue/dev-status.svg)](https://david-dm.org/Demivan/fluent-vue?type=dev)

Vue.js integration for Project Fluent.

## Features

TODO

## Instalation

**Add `fluent-vue` and `@fluent/bundle` to your project:**
For `npm` users:
```
npm install fluent-vue @fluent/bundle
```

For `yarn` users:
```
yarn add fluent-vue @fluent/bundle
```

**Install Vue plugin**

```js
import Vue from 'vue';
import FluentVue from 'fluent-vue';

Vue.use(FluentVue)
```

**Configure `fluent-vue`**
```js
import { FluentBundle, FluentResource } from '@fluent/bundle';

// Create bundle
const bundle = new FluentBundle({
  locales: 'en'
})

// Add resources to the bundle 
bundle.addResource(new FluentResource('key = World'))
bundle.addResource(new FluentResource('another-key = Hello, {$name}'))

// Create `FluentVue` instance with options
const fluent = new FluentVue({
  bundles: [bundle]
})

// Add `fluent` option to your Vue instance
new Vue({
  el: "#root",
  fluent,
  render: h => h(App)
})
```

## Usage

TODO
