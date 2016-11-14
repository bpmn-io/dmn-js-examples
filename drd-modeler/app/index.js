'use strict';

var $ = require('jquery'),
    DmnModeler = require('dmn-js/lib/Modeler');

var dirty = false;
var originalXML = '';
var latestXML = '';

var container = $('#js-drop-zone');

var downloadLink = $('#js-download-table');

var canvas = $('#js-table');

var renderer = new DmnModeler({
  container: canvas,
  keyboard: { bindTo: document },
  table: {
    minColWidth: 200,
    tableName: 'DMN Table'
  }
});

var newTableXML = require('../resources/newTable.dmn');
var exampleXML = require('../resources/di.dmn');

function createNewTable() {
  openTable(newTableXML);
}
function createDemoTable() {
  openTable(exampleXML);
}

downloadLink.on('click', function() {
  originalXML = latestXML;
  dirty = false;
});

function setEncoded(link, name, data) {
  var encodedData = encodeURIComponent(data);

  dirty = data !== originalXML;
  latestXML = data;

  if (data) {
    link.addClass('active').attr({
      'href': 'data:application/xml;charset=UTF-8,' + encodedData,
      'download': name
    });
  } else {
    link.removeClass('active');
  }
}

function openTable(xml) {

  renderer.importXML(xml, function(err) {

    if (err) {
      container
        .removeClass('with-table')
        .addClass('with-error');

      container.find('.error pre').text(err.message);

      console.error(err);
    } else {
      container
        .removeClass('with-error')
        .addClass('with-table');

      saveTable(function(err, xml) {
        originalXML = xml;
        setEncoded(downloadLink, 'table.dmn', err ? null : xml);
      });
    }
  });
}

function saveTable(done) {

  renderer.saveXML({ format: true }, function(err, xml) {
    done(err, xml);
  });
}

function registerFileDrop(container, callback) {

  function handleFileSelect(e) {

    e.stopPropagation();
    e.preventDefault();

    if(dirty && !window.confirm('You made changes to the previous table, ' +
          'do you really want to load the new table and overwrite the changes?')) {
      return;
    }

    var files = e.dataTransfer.files;

    var file = files[0];

    var reader = new FileReader();

    reader.onload = function(e) {

      var xml = e.target.result;

      callback(xml);
    };

    reader.readAsText(file);
  }

  function handleDragOver(e) {
    e.stopPropagation();
    e.preventDefault();

    e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  container.get(0).addEventListener('dragover', handleDragOver, false);
  container.get(0).addEventListener('drop', handleFileSelect, false);
}


////// file drag / drop ///////////////////////

// check file api availability
if (!window.FileList || !window.FileReader) {
  window.alert(
    'Looks like you use an older browser that does not support drag and drop. ' +
    'Try using Chrome, Firefox or the Internet Explorer > 10.');
} else {
  registerFileDrop(container, openTable);
}

// bootstrap table functions

$(document).on('ready', function() {

  $('#js-create-table').click(function(e) {
    e.stopPropagation();
    e.preventDefault();

    createNewTable();
    if(window.history && typeof window.history.pushState === 'function') {
      window.history.pushState({},'', window.location.href + '?new');
    }
  });

  $('.use-demo').click(function(e) {
    e.stopPropagation();
    e.preventDefault();

    createDemoTable();
    if(window.history && typeof window.history.pushState === 'function') {
      window.history.pushState({},'', window.location.href + '?example');
    }
  });

  $('.buttons a').click(function(e) {
    if (!$(this).is('.active')) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  function checkDirty() {
    if (dirty) {
      return 'The changes you performed on the table will be lost upon navigation.';
    }
  }

  var href = window.location.href;
  if(href.indexOf('?new') !== -1) {
    createNewTable();
  } else if(href.indexOf('?example') !== -1) {
    createDemoTable();
  }

  window.onbeforeunload = checkDirty;

  var exportArtifacts = function() {
    saveTable(function(err, xml) {
      setEncoded(downloadLink, 'table.dmn', err ? null : xml);
    });
  };

  renderer.on('commandStack.changed', exportArtifacts);
  renderer.table.on('commandStack.changed', exportArtifacts);
});
