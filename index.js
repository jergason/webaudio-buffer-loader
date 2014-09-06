var async = require('async');

function loadBuffers(paths, context, cb) {
  if (Array.isArray(paths)) {
    async.map(paths, loadBuffer(context), cb);
  }
  else {
    loadBuffer(context)(paths, cb);
  }
}

function loadBuffer(context) {
  return function loadBufferWorker(path, cb) {
    var request = new XMLHttpRequest();
    request.open('GET', path, true);
    request.responseType = 'arraybuffer';

    request.onload = function() {
      context.decodeAudioData(request.response, function(theBuffer) {
        cb(null, theBuffer);
      }, function(err) {
        cb(err);
      });
    }
    request.send();
  };
}

module.exports = loadBuffers;
