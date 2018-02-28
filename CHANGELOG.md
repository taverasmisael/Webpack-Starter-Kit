# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
