'use strict';

// we use fs + brfs to inline an example XML document.
// exclude fs in package.json#browser + use the brfs transform
// to generate a clean browserified bundle
var fs = require('fs');

// inlined in result file via brfs
var simpleDecision = fs.readFileSync(__dirname + '/../resources/simple.dmn', 'utf-8');

// require the viewer, make sure you added it to your project
// dependencies via npm install
var DmnViewer = require('dmn-js/lib/Viewer');

var viewer = new DmnViewer({ container: '#table' });

viewer.importXML(simpleDecision, function(err) {
  if (!err) {
    console.log('success!');
  } else {
    console.log('something went wrong:', err);
  }
});
