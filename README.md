# Vue CLI Plugin MFC

Vue CLI plugin for multiple file component projects.

## What is MFC (Multiple File Component)?

It is opposite thing of single file component (SFC). While SFC includes all things in one file (`.vue` file), MFC splits a component in separated files:

```
└── App
    ├── App.css
    ├── App.html
    └── App.js
```

`vue-cli-plugin-mfc` helps you to construct your project with MFCs by using [vue-template-loader](https://github.com/ktsn/vue-template-loader) on the internal webpack config in Vue CLI service.

## Installation

```sh
# make sure you already installed @vue/cli
$ vue add mfc
```

## License

MIT
