<h1 align="center">
  <img src="https://raw.githubusercontent.com/demivan/fluent-vue/HEAD/docs/assets/logo.svg" alt="fluent-vue logo" />
</h1>

<p align="center">
  Internationalization plugin for Vue.js
</p>

<p align="center">
  <a href="https://github.com/Demivan/fluent-vue/actions">
    <img src="https://img.shields.io/github/workflow/status/demivan/fluent-vue/Test" alt="GitHub Workflow Status">
  </a>
  <a href="https://codecov.io/gh/Demivan/fluent-vue">
    <img src="https://codecov.io/gh/Demivan/fluent-vue/branch/develop/graph/badge.svg?token=0JSSE94EGJ" alt="codecov">
  </a>
  <a href="https://bundlephobia.com/result?p=fluent-vue">
    <img src="https://img.shields.io/bundlephobia/min/fluent-vue" alt="npm bundle size">
  </a>
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" alt="Standard - JavaScript Style Guide">
  </a>
  <a href="https://github.com/Demivan/fluent-vue/blob/develop/LICENSE">
    <img src="https://img.shields.io/github/license/demivan/fluent-vue" alt="GitHub license">
  </a>
</p>

`fluent-vue` is [Vue.js](https://vuejs.org) integration for [Fluent.js](https://github.com/projectfluent/fluent.js) - JavaScript implementation of [Project Fluent](https://projectfluent.org)

## 🚀 Features

- **Simple api for developers**: Just 2 methods, 1 directive and 1 component
- **Powerfull syntax for translators**: Use the entire expressive power of every language without need for changes to application source code
- **Isolation**: Locale-specific logic doesn't leak to other locales. A simple string in English can map to a complex multi-variant translation in another language
- **Seamless migration**: Works for **both** Vue 3 and 2
- **No bundler required**: Usable via CDN

## 🎉 Example

```vue
<template>
  <div>
    <div>{{ $t('hello-user', { userName }) }}</div>
    <div>{{ $t('shared-photos', { userName, photoCount, userGender }) }}</div>
  </div>
</template>

<fluent locale="en">
# Simple things are simple.
hello-user = Hello, {$userName}!

# Complex things are possible.
shared-photos =
  {$userName} {$photoCount ->
     [one] added one photo
    *[other] added {$photoCount} new photos
  } to {$userGender ->
     [male] his stream
     [female] her stream
    *[other] their stream
  }.
</fluent>

```

## 📖 Documentation

Documentation can be found here: [https://fluent-vue.demivan.me](https://fluent-vue.demivan.me)

Examples for different Vue.js versions and build systems can be found [here](https://github.com/demivan/fluent-vue/tree/develop/examples).

## 📜 Changelog

Changes for each release are documented in the [CHANGELOG.md](https://github.com/demivan/fluent-vue/blob/develop/CHANGELOG.md).

## 📦 Packages

This monorepo contains multiple packages:

* [fluent-vue](https://github.com/Demivan/fluent-vue/tree/develop/packages/fluent-vue) - Vue.js plugin
* [fluent-vue-loader](https://github.com/Demivan/fluent-vue/tree/develop/packages/fluent-vue-loader) - Webpack loader that adds support for custom blocks in SFC
* [rollup-plugin-fluent-vue](https://github.com/Demivan/fluent-vue/tree/develop/packages/rollup-plugin-fluent-vue) - Rollup\Vite plugin that adds support for custom blocks in SFC

## 📄 License

[MIT License](https://github.com/demivan/fluent-vue/blob/develop/LICENSE) © 2020-present [Ivan Demchuk](https://github.com/demivan)
