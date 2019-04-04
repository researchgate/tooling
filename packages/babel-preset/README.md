<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [@researchgate/babel-preset *](#researchgatebabel-preset-)
  - [Install](#install)
  - [Usage](#usage)
    - [Via `.babelrc` (Recommended)](#via-babelrc-recommended)
  - [Options](#options)
    - [env BABEL_ENV](#env-babel_env)
    - [env BABEL_OUTPUT](#env-babel_output)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# @researchgate/babel-preset [![npm](https://img.shields.io/npm/v/@researchgate/babel-preset.svg)](https://www.npmjs.com/package/@researchgate/babel-preset)

Babel preset for ResearchGate projects.

## Install

```sh
yarn add --dev @researchgate/babel-preset
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["@researchgate/babel-preset"]
}
```

## Options

### env BABEL_ENV

Supports either `production`, `development` or `test`

### env BABEL_OUTPUT

Supports either `esm` or `cjs`

Default to `esm` unless BABEL_ENV is set to test then it defaults to `cjs`
