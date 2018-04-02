# font-roboto-local

A version of [font-roboto](https://github.com/PolymerElements/font-roboto) using
locally available font files

The font files are subject to the Apache License found here: https://github.com/google/fonts/blob/master/apache/roboto/LICENSE.txt

## Usage in a Polymer 2.x Application

Add the following line to the end of your `bower.json`

```json
"font-roboto": "PolymerElements/font-roboto-local#^1.1.0"
```

Remove your `bower_components` directory and run `bower install`.

If you are using polymer CLI to build your app then add the following to your `polymer.json`'s `extraDependencies` array.

```json
"bower_components/font-roboto/fonts/roboto/*"
```

