/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

// modified version of html function so that i can insert import meta
const html =
    function html(strings, ...values) {
  const template =
      /** @type {!HTMLTemplateElement} */ (document.createElement('template'));
  template.innerHTML =
      values.reduce((acc, v, idx) => acc + v + strings[idx + 1], strings[0]);
  return template;
}

const importUrl = import.meta.url;

const template = html`
  <style>
    @font-face {
    font-family: "Roboto";
    src: url(${
  new URL('fonts/roboto/Roboto-Thin.ttf', importUrl)}) format("truetype");
    font-weight: 100;
    font-style: normal;
    }
    @font-face {
    font-family: "Roboto";
    src: url(${
  new URL(
      'fonts/roboto/Roboto-ThinItalic.ttf', importUrl)}) format("truetype");
    font-weight: 100;
    font-style: italic;
    }
    @font-face {
    font-family: "Roboto";
    src: url(${
  new URL('fonts/roboto/Roboto-Light.ttf', importUrl)}) format("truetype");
    font-weight: 300;
    font-style: normal;
    }
    @font-face {
    font-family: "Roboto";
    src: url(${
  new URL(
      'fonts/roboto/Roboto-LightItalic.ttf', importUrl)}) format("truetype");
    font-weight: 300;
    font-style: italic;
    }
    @font-face {
    font-family: "Roboto";
    src: url(${
  new URL('fonts/roboto/Roboto-Regular.ttf', importUrl)}) format("truetype");
    font-weight: 400;
    font-style: normal;
    }
    @font-face {
    font-family: "Roboto";
    src: url(${
  new URL('fonts/roboto/Roboto-Italic.ttf', importUrl)}) format("truetype");
    font-weight: 400;
    font-style: italic;
    }
    @font-face {
    font-family: "Roboto";
    src: url(${
  new URL('fonts/roboto/Roboto-Medium.ttf', importUrl)}) format("truetype");
    font-weight: 500;
    font-style: normal;
    }
    @font-face {
    font-family: "Roboto";
    src: url(${
  new URL(
      'fonts/roboto/Roboto-MediumItalic.ttf', importUrl)}) format("truetype");
    font-weight: 500;
    font-style: italic;
    }
    @font-face {
    font-family: "Roboto";
    src: url(${
  new URL('fonts/roboto/Roboto-Bold.ttf', importUrl)}) format("truetype");
    font-weight: 700;
    font-style: normal;
    }
    @font-face {
    font-family: "Roboto";
    src: url(${
  new URL(
      'fonts/roboto/Roboto-BoldItalic.ttf', importUrl)}) format("truetype");
    font-weight: 700;
    font-style: italic;
    }
    @font-face {
    font-family: "Roboto";
    src: url(${
  new URL('fonts/roboto/Roboto-Black.ttf', importUrl)}) format("truetype");
    font-weight: 900;
    font-style: normal;
    }
    @font-face {
    font-family: "Roboto";
    src: url(${
  new URL(
      'fonts/roboto/Roboto-BlackItalic.ttf', importUrl)}) format("truetype");
    font-weight: 900;
    font-style: italic;
    }
    @font-face {
    font-family: "Roboto Mono";
    src: url(${
  new URL(
      'fonts/robotomono/RobotoMono-Thin.ttf', importUrl)}) format("truetype");
    font-weight: 100;
    font-style: normal;
    }
    @font-face {
    font-family: "Roboto Mono";
    src: url(${
  new URL(
      'fonts/robotomono/RobotoMono-ThinItalic.ttf',
      importUrl)}) format("truetype");
    font-weight: 100;
    font-style: italic;
    }
    @font-face {
    font-family: "Roboto Mono";
    src: url(${
  new URL(
      'fonts/robotomono/RobotoMono-Light.ttf',
      importUrl)}) format("truetype");
    font-weight: 300;
    font-style: normal;
    }
    @font-face {
    font-family: "Roboto Mono";
    src: url(${
  new URL(
      'fonts/robotomono/RobotoMono-LightItalic.ttf',
      importUrl)}) format("truetype");
    font-weight: 300;
    font-style: italic;
    }
    @font-face {
    font-family: "Roboto Mono";
    src: url(${
  new URL(
      'fonts/robotomono/RobotoMono-Regular.ttf',
      importUrl)}) format("truetype");
    font-weight: 400;
    font-style: normal;
    }
    @font-face {
    font-family: "Roboto Mono";
    src: url(${
  new URL(
      'fonts/robotomono/RobotoMono-Italic.ttf',
      importUrl)}) format("truetype");
    font-weight: 400;
    font-style: italic;
    }
    @font-face {
    font-family: "Roboto Mono";
    src: url(${
  new URL(
      'fonts/robotomono/RobotoMono-Medium.ttf',
      importUrl)}) format("truetype");
    font-weight: 500;
    font-style: normal;
    }
    @font-face {
    font-family: "Roboto Mono";
    src: url(${
  new URL(
      'fonts/robotomono/RobotoMono-MediumItalic.ttf',
      importUrl)}) format("truetype");
    font-weight: 500;
    font-style: italic;
    }
    @font-face {
    font-family: "Roboto Mono";
    src: url(${
  new URL(
      'fonts/robotomono/RobotoMono-Bold.ttf', importUrl)}) format("truetype");
    font-weight: 700;
    font-style: normal;
    }
    @font-face {
    font-family: "Roboto Mono";
    src: url(${
  new URL(
      'fonts/robotomono/RobotoMono-BoldItalic.ttf',
      importUrl)}) format("truetype");
    font-weight: 700;
    font-style: italic;
    }
  </style>`;

document.head.appendChild(template.content);