'use strict';

import dishDecision from '../resources/dish-decision.dmn';

// require the viewer, make sure you added it to your project
// dependencies via npm install --save dmn-js
import DmnViewer from 'dmn-js';


var dmnJS = new DmnViewer({
  container: '#canvas'
});

dmnJS.importXML(dishDecision, function(err) {

  if (!err) {
    console.log('success!');

    dmnJS
      .getActiveViewer()
        .get('canvas')
          .zoom('fit-viewport');
  } else {
    console.log('something went wrong:', err);
  }
});