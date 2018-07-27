[![Published on NPM](https://img.shields.io/npm/v/@polymer/font-roboto-local.svg)](https://www.npmjs.com/package/@polymer/font-roboto-local)
[![Build status](https://travis-ci.org/PolymerElements/font-roboto-local.svg?branch=master)](https://travis-ci.org/PolymerElements/font-roboto-local)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/@polymer/font-roboto-local)

## font-roboto-local

A version of [font-roboto](https://github.com/PolymerElements/font-roboto) using locally available font files

The font files are subject to the Apache License found here: https://github.com/google/fonts/blob/master/apache/roboto/LICENSE.txt

See: [Documentation](https://www.webcomponents.org/element/@polymer/font-roboto-local),
  [Demo](https://www.webcomponents.org/element/@polymer/font-roboto-local/demo/demo/index.html).

## Usage

### Installation
```
npm install --save @polymer/font-roboto-local
```

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '@polymer/font-roboto-local/roboto.js';
    </script>
    <style>
      div { font-family: Roboto; }
    </style>
  </head>
  <body>
    <div>This should be in roboto</div>
  </body>
</html>
```
### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/font-roboto-local/roboto.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        div { font-family: Roboto; }
      </style>
      <div>This should be in roboto</div>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Contributing
If you want to send a PR to this element, here are
the instructions for running the tests and demo locally:

### Installation
```sh
git clone https://github.com/PolymerElements/font-roboto-local
cd font-roboto-local
npm install
npm install -g polymer-cli
```

### Running the demo locally
```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```