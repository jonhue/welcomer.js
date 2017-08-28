# Welcomer.js - Slick welcome bars for your pages

**Size:** < 1kb gzipped

---

## Usage

```javascript
$(function() {
    $('body').welcomer();
});
```

```html
<body data-welcomer-content="Say hello to welcomer.js" data-welcomer-link="View on GitHub" data-welcomer-href="https://github.com/slooob/welcomer.js">
</body>
```

### Options

* `data-welcomer-content`: The primary text. Accepts string.
* `data-welcomer-link`: Call-to-action caption. Requires `data-welcomer-href`. Accepts string.
* `data-welcomer-href`: Call-to-action target location. Requires `data-welcomer-link`. Accepts string.
* `data-welcomer-new_tab`: If `true`, opens call-to-action target location in a new tab. Accepts `true` or `false`. Defaults to `false`.
* `data-welcomer-close`: Whether a close button is included. Accepts `true` or `false`. Defaults to `true`.
* `data-welcomer-autoclose`: Miliseconds after which the welcomer automatically disappears. Accepts an integer or `false`. Defaults to `false`.
* `data-welcomer-delay`: Miliseconds after which welcomer opens. Accepts an integer. Defaults to `1000`.
