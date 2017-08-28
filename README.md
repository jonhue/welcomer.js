# Welcomer.js - Slick welcome bars for your pages

---

## Usage

```javascript
$('.content-wrapper').welcomer();
```

```html
<div class="content-wrapper" data-welcomer-content="We launched our new product!" data-welcomer-link="Start a trial" data-welcomer-href="https://example.com">
</div>
```

### Options

* `data-welcomer-content`: The primary text. Accepts string.
* `data-welcomer-link`: Call-to-action caption. Requires `data-welcomer-href`. Accepts string.
* `data-welcomer-href`: Call-to-action target location. Requires `data-welcomer-link`. Accepts string.
* `data-welcomer-new_tab`: If `true`, opens call-to-action target location in a new tab. Accepts `true` or `false`. Defaults to `false`.
* `data-welcomer-close`: Whether a close button is included. Accepts `true` or `false`. Defaults to `true`.
* `data-welcomer-autoclose`: Miliseconds after which the welcomer automatically disappears. Accepts an integer or `false`. Defaults to `false`.
* `data-welcomer-turbolinks`: Whether turbolinks is in use or not. Accepts an `true` or `false`. Defaults to `false`.
