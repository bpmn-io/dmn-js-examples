# dmn-js pre-packaged example

This example showcases how to use the pre-packaged version(s) of [dmn-js](https://github.com/bpmn-io/dmn-js).


## About

We provide pre-packaged versions of our toolkit via [unpkg](https://unpkg.com/dmn-js/dist/).

This example shows how to embed these resources to integrate a DMN viewer or editor
into a website.


## Embed pre-packaged Assets

Download or simply include the relevant dependencies into your website:

#### Viewer

```html
<link rel="stylesheet" href="https://unpkg.com/dmn-js@14.1.6/dist/assets/dmn-js-drd.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@14.1.6/dist/assets/dmn-js-decision-table.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@14.1.6/dist/assets/dmn-js-literal-expression.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@14.1.6/dist/assets/dmn-js-shared.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@14.1.6/dist/assets/dmn-font/css/dmn.css">

<script src="https://unpkg.com/dmn-js@14.1.6/dist/dmn-viewer.development.js"></script>
```

Download the complete [viewer example](https://cdn.staticaly.com/gh/bpmn-io/dmn-js-examples/master/starter/viewer.html).

#### Modeler

```html
<link rel="stylesheet" href="https://unpkg.com/dmn-js@14.1.6/dist/assets/diagram-js.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@14.1.6/dist/assets/dmn-js-shared.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@14.1.6/dist/assets/dmn-js-drd.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@14.1.6/dist/assets/dmn-js-decision-table.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@14.1.6/dist/assets/dmn-js-decision-table-controls.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@14.1.6/dist/assets/dmn-js-literal-expression.css">
<link rel="stylesheet" href="https://unpkg.com/dmn-js@14.1.6/dist/assets/dmn-font/css/dmn.css">

<script src="https://unpkg.com/dmn-js@14.1.6/dist/dmn-modeler.development.js"></script>
```

Download the complete [modeler example](https://cdn.staticaly.com/gh/bpmn-io/dmn-js-examples/master/starter/modeler.html).


## Use the Library

The library is bundled as an UMD bundle and binds itself to the global `DmnJS`
variable.

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

  // access active viewer (might be an editor, too!)
  dmnJS
    .getActiveViewer()
      .get('canvas')
        .zoom('fit-viewport');
} catch (err) {
  console.log('something went wrong:', err);
}
```

## License

MIT
