import magicPropertiesProviderModule from './provider/magic';
import magicModdleDescriptor from './descriptors/magic';

import DmnModeler from 'dmn-js/lib/Modeler';

import {
  DmnPropertiesPanelModule,
  DmnPropertiesProviderModule
} from 'dmn-js-properties-panel';

import diagramXML from '../resources/diagram.dmn';


function ChangeLogger(eventBus, dmnJS) {

  console.log('FOO');

  eventBus.on('commandStack.changed', () => {

    console.log('CHANGED!');

    dmnJS.saveXML({ format: true })
      .then(({ xml }) => console.log(xml))
      .catch(error => {
        console.error('Failed to save diagram', error);
      });
  });
}

ChangeLogger.$inject = [ 'eventBus', '_parent' ];

var changedLoggerModule = {
  __init__: [
    'changedLogger'
  ],
  changedLogger: [ 'type', ChangeLogger ]
};


var dmnModeler = new DmnModeler({
  container: '#canvas',
  drd: {
    propertiesPanel: {
      parent: '#properties-panel-parent'
    },
    additionalModules: [
      DmnPropertiesPanelModule,
      DmnPropertiesProviderModule,
      magicPropertiesProviderModule,
      changedLoggerModule
    ]
  },
  moddleExtensions: {
    magic: magicModdleDescriptor
  }
});


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