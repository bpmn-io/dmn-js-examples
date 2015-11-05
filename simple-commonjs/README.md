# dmn-js in CommonJS Applications

[dmn-js](https://github.com/bpmn-io/dmn-js) is a DMN modeling and rendering toolkit.

This example showcases how to integrate [dmn-js](https://github.com/bpmn-io/dmn-js) into a node-style application.
It gets dmn-js via npm and packages the application for the browser using [browserify](http://browserify.org).


## About

This example uses dmn-js to embed the example table into a web application.

![demo application screenshot](https://raw.githubusercontent.com/bpmn-io/dmn-js-examples/master/simple-commonjs/docs/screenshot.png "Screenshot of the example application")


## Usage Summary

Install dmn-js via [npm](http://npmjs.org)

```
npm install --save dmn-js
```

Use it in your application

```javascript
var DmnViewer = require('dmn-js');


var viewer = new DmnViewer({ container: '#table' });

viewer.importXML(exampleTable, function(err) {
  if (!err) {
    console.log('success!');
  } else {
    console.log('something went wrong:', err);
  }
});
```


## Building the Project

Initialize the project dependencies via

```
npm install
```

The project contains a  [Grunt](http://gruntjs.com/) build script that defines a few tasks.

To create the sample distribution in the `dist` folder run

```
grunt
```

To bootstrap a development setup that spawns a small webserver and rebuilds your app on changes run

```
grunt auto-build
```


## License

MIT
