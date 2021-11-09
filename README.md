<!-- TITLE/ -->

<h1>A javascript like with cookies and create html, install and use in 5 minutes!</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-npmversion"><a href="https://npmjs.org/package/cadot-info-like" title="View this project on NPM"><img src="https://img.shields.io/npm/v/cadot-info-like.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/cadot-info-like" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/cadot-info-like.svg" alt="NPM downloads" /></a></span>
<br class="badge-separator" />
<span class="badge-paypal"><a href="https://www.paypal.com/donate?hosted_button_id=E9S29AEA3HGXQ" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

A javascript like with cookies and ajax possibility

<!-- /DESCRIPTION -->


<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>
<ul>
<li>Require: <code>const likes = require('cadot-info-like')</code></li>
</ul>



## Usage

- `const likes = require("cadot-info-like");`
- `likes.init();` for default config (described after)

you can define your parameters by

`likes.init(class of button, link...,text or image for like, same for not like, id for counter )`

Default value:

- class of button: likes
- text: i like
- text: i don't like
- counter (optional): counter

For example, you can use with font-awesome

```js
  likes.init(
    "likesButton",
    "<i class='fas fa-thumbs-up'></i>",
    "<i class='fas fa-thumbs-down'></i>",
    "counterGlobal"
);
```
### Integration
```html
<h1>Counter favorites</h1>
  <p id="counter">0</p>
    <ul>
      <li><a class="favorites" data-id="1" href="#"></a></li>
      <li><a class="favorites" data-id="2" href="#"></a></li>
      <li><a class="favorites" data-id="3" href="#"></a></li>
      <li><a class="favorites" data-id="4" href="#"></a></li>
    </ul>
```

please give issues or Pull Request in github ;-)

<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2021+ <a href="https://cadot.info">Cadot.info ltd</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
