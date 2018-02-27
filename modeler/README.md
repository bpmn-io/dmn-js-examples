# dmn-js Modeler Example

This example showcases using the API of dmn-js to build a tabbed modeler. 

It builds upon the [starter example](https://github.com/bpmn-io/dmn-js-examples/tree/master/starter).

[![modeler example screenshot](./modeler.png)](https://rawgit.com/dmn-io/dmn-js-examples/master/modeler/modeler.html)

[Try it out](https://rawgit.com/bpmn-io/dmn-js-examples/master/modeler/modeler.html).


## Usage Summary

Open a view using `#getViews` and `#open` when clicking on a tab.

```javascript
$('.editor-tabs').delegate('.tab', 'click', function(e) {

  // get index of view from clicked tab
  var viewIdx = parseInt(this.getAttribute('data-id'), 10);

  // get view using index
  var view = dmnModeler.getViews()[viewIdx];

  // open view
  dmnModeler.open(view);
});
```

Update tabs whenever the views change.

```javascript
dmnModeler.on('views.changed', function(event) {

  // get views from event
  var { views, activeView } = event;

  // clear tabs
  $tabs.empty();

  // create a new tab for each view
  views.forEach(function(v, idx) {

    const className = CLASS_NAMES[v.type];

    var tab = $(`
      <div class="tab ${ v === activeView ? 'active' : ''}" data-id="${idx}">
        <span class="${ className }"></span>
        ${v.element.name || v.element.id}
      </div>
    `);

    $tabs.append(tab);
  });
});
```

## Licence

MIT
