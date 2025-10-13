import DmnModeler from 'dmn-js/lib/Modeler';

import {
  DmnPropertiesPanelModule,
  DmnPropertiesProviderModule
} from 'dmn-js-properties-panel';


var dmnModeler = new DmnModeler({
  container: '#canvas',
  drd: {
    propertiesPanel: {
      parent: '#properties-panel-parent'
    },
    additionalModules: [
      DmnPropertiesPanelModule,
      DmnPropertiesProviderModule
    ]
  }
});

import diagramXML from '../resources/diagram.dmn';

async function importXML(xml) {

  const { warnings } = await dmnModeler.importXML(xml);

  if (warnings.length) {
    console.warn('imported diagram with warnings', warnings);
  } else {
    console.log('import successful');
  }

  dmnModeler
    .getActiveViewer()
    .get('canvas')
    .zoom('fit-viewport');
}

importXML(diagramXML).catch(err => {
  console.error('Failed to import diagram', err);
});