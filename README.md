# Welcomer.js - Slick welcome bars for your pages

![NPM Version](https://img.shields.io/npm/v/welcomer.svg)
<img src="https://travis-ci.org/jonhue/welcomer.js.svg?branch=master" />

With Welcomer.js you get a simple solution to embed a customizable & slick bar on your webpage, to welcome people to your site or introduce new features to your customers. All of that without polluting your DOM.

[Demo](https://jonhue.github.io/welcomer.js)

---

## Table of Contents

* [Information](#information)
* [Usage](#usage)
    * [Options](#options)
    * [Functions](#functions)
    * [Styles](#styles)
* [To Do](#to-do)
* [Contributing](#contributing)
    * [Contributors](#contributors)
    * [Semantic Versioning](#semantic-versioning)
* [License](#license)

---

## Information

**Size:** Welcomer.js takes < 1kb gzipped.

---

## Usage

Welcomer.js is simple to use and does not require a lot of markup:

```javascript
import Welcomer from 'welcomer';
Welcomer.init();
let welcomer = new Welcomer;
```

```sass
@import "welcomer/src/welcomer"
```

```html
<div class="welcomer">
    <p class="welcomer--mobile">Window < 750px</p>
    <p>Say hello to Welcomer.js</p>
    <a href="https://github.com/jonhue/welcomer.js" target="_blank" class="welcomer--mobile">Learn more</a>
    <a href="https://github.com/jonhue/welcomer.js" target="_blank">View on GitHub</a>
    <div class="welcomer--close">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve"><g transform="translate(0, 0)"><polygon fill="#fff" points="10.1,4.5 8,6.6 5.9,4.5 4.5,5.9 6.6,8 4.5,10.1 5.9,11.5 8,9.4 10.1,11.5 11.5,10.1 9.4,8 11.5,5.9 "></polygon></g></svg>
    </div>
</div>
```

**Note:** You can omit the `.welcomer--close` div, if you don't want your welcomer to be closeable manually. Elements with the `welcomer--mobile` class are also optional.

### Functions

```javascript
// Shows welcomer
welcomer.appear();

// Hides welcomer
welcomer.disappear();

// Hides welcomer in 5 seconds unless it is hovered
welcomer.autoclose(5000);
```

### Options

You can pass an options hash when constructing new objects from the `Welcomer` class:

* `autoclose` Milliseconds after which the welcomer automatically disappears. Accepts an integer or `false`. Defaults to `false`.
* `delay` Milliseconds after which welcomer opens. Accepts an integer. Defaults to `1000`.

### Styles

You can find the project's [`sass` file](src/welcomer.sass) under the root directory. If you want to modify it to integrate Welcomer.js better into your site, feel free to download and edit it. Then embed the edited version on your site.

You can change the mobile breakpoint by setting the `$welcomer--mobile` variable before importing Welcomer.js.

---

## To Do

[Here](https://github.com/jonhue/welcomer.js/projects/1) is the full list of current projects.

To propose your ideas, initiate the discussion by adding a [new issue](https://github.com/jonhue/welcomer.js/issues/new).

---

## Contributing

We hope that you will consider contributing to Welcomer.js. Please read this short overview for some information about how to get started:

[Learn more about contributing to this repository](CONTRIBUTING.md), [Code of Conduct](CODE_OF_CONDUCT.md)

### Contributors

Give the people some :heart: who are working on this project. See them all at:

https://github.com/jonhue/welcomer.js/graphs/contributors

### Semantic Versioning

Welcomer.js follows Semantic Versioning 2.0 as defined at http://semver.org.

## License

MIT License

Copyright (c) 2017 Jonas Hübotter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
