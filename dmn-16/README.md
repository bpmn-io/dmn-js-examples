# DMN 1.6 Example

This example shows how to open and save [DMN 1.6](https://www.omg.org/spec/DMN/1.6) diagrams with [dmn-js](https://github.com/bpmn-io/dmn-js) by overriding the meta-model it uses.

Out of the box, dmn-js reads and writes DMN 1.3. Packages passed via `moddleExtensions` replace the built-in [dmn-moddle](https://github.com/bpmn-io/dmn-moddle) packages registered under the same key. We take the original DMN 1.3 meta-model, re-bind it to the DMN 1.6 namespaces and hand it over to dmn-js:

```javascript
import DmnModeler from 'dmn-js/lib/Modeler';

import dmnPackage from 'dmn-moddle/resources/dmn/json/dmn13.json';
import dmndiPackage from 'dmn-moddle/resources/dmn/json/dmndi13.json';

const dmnModeler = new DmnModeler({
  container: '#canvas',
  moddleExtensions: {
    dmn: {
      ...dmnPackage,
      uri: 'https://www.omg.org/spec/DMN/20240513/MODEL/'
    },
    dmndi: {
      ...dmndiPackage,
      uri: 'https://www.omg.org/spec/DMN/20230324/DMNDI/'
    }
  }
});

await dmnModeler.importXML(dmn16XML);
```

The `DC` and `DI` namespaces (`http://www.omg.org/spec/DMN/20180521/{DC,DI}/`) did not change in DMN 1.6 and need no override.

Saved diagrams use the DMN 1.6 namespaces, too:

```javascript
const { xml } = await dmnModeler.saveXML({ format: true });
```

## Limitations

This is the DMN 1.3 meta-model under DMN 1.6 namespaces, not full DMN 1.6 support. Elements introduced after DMN 1.3 (e.g. boxed expressions such as `conditional`, `filter` or `iterator`) are not known to the meta-model: importing them produces warnings and they are dropped on export. Unknown attributes produce warnings, too, but are preserved.

## Usage

```bash
npm i && npm run all
```

Run the example in development mode:

```bash
npm start
```

Call `exportDiagram()` in the browser console to print the exported DMN 1.6 XML.

## License

MIT
