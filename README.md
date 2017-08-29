# Welcomer.js - Slick welcome bars for your pages

<img src="https://travis-ci.org/slooob/welcomer.js.svg?branch=master" />

**Size:** < 1kb gzipped

---

## Table of Contents

* [Usage](#usage)
    * [Options](#options)
* [To Do](#to-do)
* [Contributing](#contributing)
    * [Contributors](#contributors)
    * [Semantic Versioning](#semantic-versioning)
* [License](#license)

---

## Usage

Welcomer.js is simple to use and does not require a lot of markup:

```javascript
$(function() {
    $('body').welcomer();
});
```

```html
<body data-welcomer-content="Say hello to Welcomer.js" data-welcomer-link="View on GitHub" data-welcomer-href="https://github.com/slooob/welcomer.js">
</body>
```

### Options

Welcomer.js adopts well to your site. You have bunch of configuration options:

* `data-welcomer-content`: The primary text. Accepts string.
* `data-welcomer-mobile-content`: An alternative text used for screen sizes < `750px`. Accepts string.
* `data-welcomer-link`: Call-to-action caption. Requires `data-welcomer-href`. Accepts string.
* `data-welcomer-mobile-link`: Call-to-action caption used for screen sizes < `750px`. Requires `data-welcomer-href`. Accepts string.
* `data-welcomer-href`: Call-to-action target location. Requires `data-welcomer-link`. Accepts string.
* `data-welcomer-new_tab`: If `true`, opens call-to-action target location in a new tab. Accepts `true` or `false`. Defaults to `false`.
* `data-welcomer-close`: Whether a close button is included. Accepts `true` or `false`. Defaults to `true`.
* `data-welcomer-autoclose`: Miliseconds after which the welcomer automatically disappears. Accepts an integer or `false`. Defaults to `false`.
* `data-welcomer-delay`: Miliseconds after which welcomer opens. Accepts an integer. Defaults to `1000`.

### Styles

You can find the project's [`sass` file](https://github.com/slooob/welcomer.js/blob/master/welcomer.sass) under the root directory. If you want to modify it to integrate Welcomer.js better into your site, feel free to download and edit it. Now embed the edited version on your site.

---

## To Do

* Leave your suggestions [here](https://github.com/slooob/welcomer.js/issues/new)

---

## Contributing

We hope that you will consider contributing to Welcomer.js. Please read this short overview for some information about how to get started:

[Learn more about contributing to this repository](https://github.com/slooob/welcomer.js/blob/master/CONTRIBUTING.md), [Code of Conduct](https://github.com/slooob/welcomer.js/blob/master/CODE_OF_CONDUCT.md)

### Contributors

Give the people some :heart: who are working on this project. See them all at:

https://github.com/slooob/welcomer.js/graphs/contributors

### Semantic Versioning

Welcomer.js follows Semantic Versioning 2.0 as defined at http://semver.org.

## License

MIT License

Copyright (c) 2017 Slooob

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
