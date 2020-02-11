import diagram from '../resources/diagram13.dmn';

import DmnModeler from 'dmn-js/lib/Modeler';

import fileDrop from 'file-drops';

import { migrateDiagram } from '@bpmn-io/dmn-migrate';

const dmnModeler = new DmnModeler({
  container: '#canvas'
});

// (1) import DMN diagram
async function importXML(xml) {

  // (1.1) migrate to DMN 1.3 if necessary
  xml = await migrateDiagram(xml);

  // (1.2) import DMN 1.3 diagram
  dmnModeler.importXML(xml, err => {
    if (err) {
      console.error(err);
    }
  });
}

importXML(diagram);

// drag and drop DMN diagrams
document.querySelector('#canvas').addEventListener('dragover', fileDrop(files => {
  const { contents } = files[ 0 ];
  
  importXML(contents);
}));