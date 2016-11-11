# dmn-js Viewer Example

This example uses [dmn-js](https://github.com/bpmn-io/dmn-js) to implement a modeler for DMN tables.

## About

This example is a node-style web application that builds a user interface around the dmn-js dmn modeler.

![demo application screenshot](https://raw.githubusercontent.com/bpmn-io/dmn-js-examples/master/drd-viewer/docs/screenshot.png "Screenshot of the example application")


## Building

You need a [NodeJS](http://nodejs.org) development stack with [npm](https://npmjs.org) and [grunt](http://gruntjs.com) installed to build the project.

To install all project dependencies execute

```
npm install
```

Build the application (including [dmn-js](https://github.com/bpmn-io/dmn-js)) using [browserify](http://browserify.org) via

```
grunt
```

You may also spawn a development setup by executing

```
grunt auto-build
```

Both tasks generate the distribution ready client-side modeler application into the `dist` folder.

Serve the application locally or via a web server (nginx, apache, embedded).
