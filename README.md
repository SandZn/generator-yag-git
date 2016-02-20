# generator-yag-git [![npm version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![Coverage status][coveralls-image]][coveralls-url] [![Dependency status][gemnasium-image]][gemnasium-url]

> Yet Another Generator for [Yeoman](http://yeoman.io) to init and config a project for Git.

* Initializes a Git repository
* Adds a Git remote if found in package.json
* Adds a `.gitattributes` file
* Adds a `.gitignore` file

## Installation

Install [Yeoman](http://yeoman.io) and `generator-yag-git` globally with [npm](https://www.npmjs.com/):

```bash
npm install -g yo
npm install -g generator-yag-git
```

Then initialize and configure project for Git:

```bash
mkdir my-project
cd my-project
npm init
yo yag-git
# Initialized empty Git repository in /Users/thanos/Dev/my-project/.git/
# Added Git remote git@github.com:alefteris/my-project.git
#    create .gitattributes
#    create .gitignore
```

## License

[MIT](http://opensource.org/licenses/mit-license.php)

[npm-image]: https://img.shields.io/npm/v/generator-yag-git.svg
[npm-url]: https://npmjs.org/package/generator-yag-git
[travis-image]: https://travis-ci.org/alefteris/generator-yag-git.svg?branch=master
[travis-url]: https://travis-ci.org/alefteris/generator-yag-git
[coveralls-image]: https://coveralls.io/repos/github/alefteris/generator-yag-git/badge.svg
[coveralls-url]: https://coveralls.io/github/alefteris/generator-yag-git
[gemnasium-image]: https://img.shields.io/gemnasium/alefteris/generator-yag-git.svg
[gemnasium-url]: https://gemnasium.com/alefteris/generator-yag-git
