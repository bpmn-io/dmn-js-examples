# dmn-js bundling-modeler example

This example showcases how to add [dmn-js](https://github.com/bpmn-io/dmn-js) modeler
into a node-style application and bundle it for the browser using
[Webpack](https://webpack.js.org).


## About

This example uses dmn-js to embed the [dish-decision](https://demo.bpmn.io/dmn/s/check-order) diagram into a web application.

![example screenshot](./resources/screenshot.png "Screenshot of the example application")


## Usage Summary

Install dmn-js via [npm](http://npmjs.org)

```
npm install --save dmn-js
```

Use it in your application

```javascript
const dmnJS = new DmnViewer({
  container: '#canvas'
});

try {
  const { warnings } = await dmnJS.importXML(xml);

  if (warnings.length) {
    console.log('import with warnings', warnings);
  } else {
    console.log('import successful');
  }

  dmnJS
    .getActiveViewer()
      .get('canvas')
        .zoom('fit-viewport');
} catch (err) {
  console.log('something went wrong:', err);
}
```

Add an appropriate loader that understands the ES modules that [dmn-js](http://github.com/bpmn-io/dmn-js) ships with.

Webpack, as seen in [the example](./webpack.config.js) understands ES modules out of the box and will combine the sources to a cross-browser understandable ES5 bundle.

Bundle the `src/app.js` file for the browser with webpack:

```
webpack ./src/app.js -o public/app.bundled.js --mode development
```

To learn about more bundling options, checkout the [webpack-cli documentation](https://webpack.js.org/api/cli/).

__Note:__ You may use another bundling setup, too. Options include, among others, Rollup or Browserify + Babelify.


## Building the Example

Initialize the project dependencies via

```
npm install
```

To create the sample distribution in the `public` folder run

```
npm run all
```


## License

MIT
