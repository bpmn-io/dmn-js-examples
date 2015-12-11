# dmn-js bower example

[dmn-js](https://github.com/bpmn-io/dmn-js) is the DMN 1.1 table modeling and rendering toolkit that powers [bpmn.io](http://bpmn.io).

This example showcases how pull [dmn-js](https://github.com/bpmn-io/dmn-js) into a web application via [bower](http://bower.io).


## About

This example uses dmn-js to embed the [check order](http://demo.bpmn.io/dmn/s/check-order) table into a web application.

![demo application screenshot](https://raw.githubusercontent.com/bpmn-io/dmn-js-examples/master/simple-bower/docs/screenshot.png "Screenshot of the example application")


## Usage Summary

Install dmn-js via [bower](http://bower.io)

```
bower install --save dmn-js
```

Embed it into a website

```html
<!-- viewer -->
<script src="bower_components/dmn-js/dist/dmn-viewer.js"></script>
```

Use it in your application

```javascript
var DmnViewer = window.DmnJS;


var viewer = new DmnViewer({ container: '#canvas' });

viewer.importXML(dmnXml, function(err) {

  if (!err) {
    console.log('success!');
  } else {
    console.log('something went wrong:', err);
  }
});
```

Make sure you serve the application via a web server (nginx, apache or for testing just `python -m SimpleHTTPServer 8080`) and ensure that the diagrams you want to access are either on the same server or [CORS](https://en.wikipedia.org/wiki/Cross-Origin_Resource_Sharing) is enabled.

## License

MIT
