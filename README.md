# font-roboto-local

A version of [font-roboto](https://github.com/PolymerElements/font-roboto) using
locally available font files

The font files are subject to the Apache License found here: https://github.com/google/fonts/blob/master/apache/roboto/LICENSE.txt

## Usage in a Polymer 2.x Application

To add this to your application, run this command from your project root directory:

```sh
bower install --save 'font-roboto=PolymerElements/font-roboto-local#^1.1.0'
```

This will add and install the dependency to your project. Then, you can import the file and use the font in your page:

```html
<head>
  ...
  <link rel="import" href="roboto.html">
  <style>
    .roboto {
      font-family: Roboto
    }
  </style>
</head>
<body>
  ...
  <div class="roboto">This is using Roboto!</div>
</body>
...
```

If you are using polymer CLI to build your app then add the following to your `polymer.json`'s `extraDependencies` array.

```json
"bower_components/font-roboto/fonts/roboto/*"
```

