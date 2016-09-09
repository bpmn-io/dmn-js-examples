'use strict';

// we use $.ajax to load the diagram.
// make sure you run the application via web-server (ie. connect (node) or asdf (ruby))

// require the viewer, make sure you added the dmn-js bower distribution
// along with all its dependencies to the web site
var DmnViewer = window.DmnJS;
console.log(DmnViewer);
var viewer = new DmnViewer({ container: '#canvas', minColWidth: 200 });

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        viewer.importXML(xhr.response, function(err) {

          if (!err) {
            console.log('success!');
          } else {
            console.log('something went wrong:', err);
          }
        });
    }
};

xhr.open('GET', '../resources/example.dmn', true);
xhr.send(null);
