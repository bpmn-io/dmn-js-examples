# DMN Compatibility Example

__Starting with `dmn-js@8` the library opens and produces DMN 1.3 files, only.__

This example shows how [dmn-js](https://github.com/bpmn-io/dmn-js) and [dmn-migrate](https://github.com/bpmn-io/dmn-migrate) can be combined to consume older DMN files (DMN 1.1, DMN 1.2), too. To achieve this, these files are migrated to valid DMN 1.3 diagrams before they get opened in the DMN toolkit.

```javascript
import { migrateDiagram } from '@bpmn-io/dmn-migrate';

import DmnModeler from 'dmn-js/lib/Modeler';

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

await importXML(someDMN_11XML);
```

## Usage

```bash
npm i && npm run all
```

## License

MIT
