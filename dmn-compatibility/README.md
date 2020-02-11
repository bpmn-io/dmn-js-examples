# DMN Compatibility Example

An example of using [dmn-js](https://github.com/bpmn-io/dmn-js) and [dmn-migrate](https://github.com/bpmn-io/dmn-migrate) to display DMN 1.1, 1.2 and 1.3 diagrams. This example uses dmn-js@8 which can only open DMN 1.3 diagrams. Therefore, DMN 1.1 and 1.2 diagrams have to be migrated to DMN 1.3 before they can be opened.

```javascript
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
```

## Usage

```bash
npm i && npm run all
```

## License

MIT