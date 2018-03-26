# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="4.0.2"></a>
## [4.0.2](https://github.com/taverasmisael/Webpack-Starter-Kit/compare/v4.0.0...v4.0.2) (2018-03-26)



<a name="4.0.1"></a>
## [4.0.1](https://github.com/taverasmisael/Webpack-Starter-Kit/compare/v4.0.0...v4.0.1) (2018-03-26)



<a name="4.0.0"></a>
# [4.0.0](https://github.com/taverasmisael/Webpack-Starter-Kit/compare/v3.0.0...v4.0.0) (2018-03-26)


### Bug Fixes

* **js:** create missing file for contactst page ([28640a4](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/28640a4))
* **js:** remove console.log s to prevent linting warnings ([bfed875](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/bfed875))
* **templates:** use the correct attr for viewport meta ([4c83463](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/4c83463))


### Features

* **dev server:** make it available on local network ([cf41855](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/cf41855))
* **scripts:** now scripts are imported only depending the page we're on ([1931c8e](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/1931c8e))
* **styles:** create good fundamentals. Move to scss folder ([52537e7](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/52537e7))
* **styles:** simplify base styles ([677d2cc](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/677d2cc))
* **template:** add pug support and aliases for imgs and config ([1c76de1](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/1c76de1))
* **templates:** split and share code. ([997d8cc](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/997d8cc))


### BREAKING CHANGES

* **templates:** migrate to pug



<a name="3.0.0"></a>
# [3.0.0](https://github.com/taverasmisael/Webpack-Starter-Kit/compare/v2.0.0...v3.0.0) (2018-03-15)


### Bug Fixes

* **autoprefixer:** use autoprefixer. Drop old IE support ([508ea32](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/508ea32))


### Features

* **chore:** open browser in dev ([e783e38](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/e783e38))
* **config:** remove config from package.json ([f7e1fdd](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/f7e1fdd))
* **css:** remove UnCSS add sourcemaps ([f4b933d](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/f4b933d))
* **gzip:** add gzip support in prod build ([1d45ded](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/1d45ded))
* **lock files:** add npm and yarn lock files ([28bf52b](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/28bf52b))


### BREAKING CHANGES

* **config:** the project config is on config/project.json



<a name="2.0.0"></a>
# 2.0.0 (2018-02-28)


### Bug Fixes

* **config:** fix exports in config file ([19e0b28](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/19e0b28))
* **favicon:** require statement ([f2cb00e](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/f2cb00e))
* **template:** use config source for html template ([830aed0](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/830aed0))


### Features

* **babel7:** add support for babel 7 and dynamic imports ([fbba3e7](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/fbba3e7))
* **hot:** drop HMR support ([74c38c2](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/74c38c2))
* **lint and typing:** add flow and eslint support to wepack ([04c3588](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/04c3588))
* **scsslint:** suppor sass with bem linting with stylelint ([e76c535](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/e76c535))
* **stylelint&favicons:** add automatic favicons and stylelint support ([3d1c230](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/3d1c230))
* **upgrade:** update all dependencies and use stage-1 ([349fbbd](https://github.com/taverasmisael/Webpack-Starter-Kit/commit/349fbbd))


### BREAKING CHANGES

* **hot:** drop the HMR support, not working properly
* **upgrade:** now the template uses SASS instead of PCSS as primary style. Enfornce Airbnb eslint. Use Jarvis instead of webpack-dashboard
