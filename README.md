# webaudio-buffer-loader

Little util for grabbing files from a server and loading them as
[AudioBuffers](http://webaudio.github.io/web-audio-api/#the-audiobuffer-interface)
in a web audio context.

## Installation


```bash
npm install webaudio-buffer-loader
```

## Usage

```JavaScript
var ctx = new AudioContext();
var loader = require('webaudio-buffer-loader');
var buffers = ['schiphol.mp3', 'what-time-taught-us.ogg', 'oxbow-b.wav'];

loader(buffers, ctx, function(err, loadedBuffers) {
  // use yer buffers
});
```

The first argument can be an array of paths or a single path. If any of the
requests to grab the file at a path fail, the cb will be called with the error.
