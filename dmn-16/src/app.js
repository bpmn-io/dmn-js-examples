import diagram from '../resources/diagram16.dmn';

import DmnModeler from 'dmn-js/lib/Modeler';

import fileDrop from 'file-drops';

import { dmn16Packages } from './dmn16';


// (1) instantiate dmn-js with the DMN 1.6 meta-model;
// packages passed as `moddleExtensions` replace the built-in
// packages registered under the same key (`dmn`, `dmndi`)
const dmnModeler = new DmnModeler({
  container: '#canvas',
  moddleExtensions: dmn16Packages
});

// (2) import DMN 1.6 diagram
async function importXML(xml) {
  const { warnings } = await dmnModeler.importXML(xml);

  if (warnings.length) {
    console.warn('Imported with warnings', warnings);
  }
}

importXML(diagram).catch(err => {
  console.error('Failed to import diagram', err);
});


// (3) export DMN 1.6 diagram
window.dmnModeler = dmnModeler;

window.exportDiagram = async function() {
  const { xml } = await dmnModeler.saveXML({ format: true });

  console.log(xml);

  return xml;
};


// drag and drop DMN diagrams
document.querySelector('#canvas').addEventListener('dragover', fileDrop(files => {
  const { contents } = files[ 0 ];

  importXML(contents).catch(err => {
    console.error('Failed to import diagram', err);
  });
}));
