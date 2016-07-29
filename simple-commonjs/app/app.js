'use strict';

// inlined in result file via stringify
var simpleDecision = require('../resources/simple.dmn');

// require the viewer, make sure you added it to your project
// dependencies via npm install
var DmnViewer = require('dmn-js/lib/Viewer');

var viewer = new DmnViewer({ container: '#table', minColWidth: 200 });

viewer.importXML(simpleDecision, function(err) {
  if (!err) {
    console.log('success!');
  } else {
    console.log('something went wrong:', err);
  }
});
