'use strict';

import dishDecision from '../resources/dish-decision.dmn';

import DmnViewer from 'dmn-js';


async function importXML(xml) {
  const dmnJS = new DmnViewer({
    container: '#canvas'
  });

  const { warnings } = await dmnJS.importXML(xml);

  if (warnings.length) {
    console.warn('imported diagram with warnings', warnings);
  } else {
    console.log('import successful');
  }

  dmnJS
    .getActiveViewer()
    .get('canvas')
    .zoom('fit-viewport');
}

importXML(dishDecision).catch(err => {
  console.error('Failed to import diagram', err);
});
