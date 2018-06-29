# split-lyrics

![npm](https://img.shields.io/npm/v/split-lyrics.svg) ![license](https://img.shields.io/npm/l/split-lyrics.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/split-lyrics.svg)

Helper utils to split lilypond lyrics.

![nodei.co](https://nodei.co/npm/split-lyrics.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/split-lyrics.svg)
![stars](https://img.shields.io/github/stars/wspecs/split-lyrics.svg)
![forks](https://img.shields.io/github/forks/wspecs/split-lyrics.svg)

![forks](https://img.shields.io/github/forks/wspecs/split-lyrics.svg)

![](https://david-dm.org/wspecs/split-lyrics/status.svg)
![](https://david-dm.org/wspecs/split-lyrics/dev-status.svg)

## Features

- Parse text with chords

## Usage

```js
import {splitWord} from 'split-lyrics';
console.log(splitWord('new'));
// great
console.log(splitWord('living'));
// li -- ving
```

## Install

`npm install --save split-lyrics`


## Scripts

 - **npm run build** : `rm -rf dist && tsc`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[commander](https://www.npmjs.com/package/commander) | ^2.15.1 | ✖
[minimist](https://www.npmjs.com/package/minimist) | ^1.2.0 | ✖
[replace](https://www.npmjs.com/package/replace) | ^1.0.0 | ✖
[shelljs](https://www.npmjs.com/package/shelljs) | ^0.8.2 | ✖
[simple-text](https://www.npmjs.com/package/simple-text) | 0.0.1 | ✖
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.0 | ✔
[@types/node](https://www.npmjs.com/package/@types/node) | ^10.0.2 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.1.1 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains TypeScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Wendly Saintil <wendlysaintil@gmail.com> https://twitter.com//wendlysaintil

## License

 - **MIT** : http://opensource.org/licenses/MIT