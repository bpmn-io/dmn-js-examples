'use strict';

import dishDecision from '../resources/dish-decision.dmn';

import DmnViewer from 'dmn-js';


async function asyncImportXml(xml) {
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
}

asyncImportXml(dishDecision);
