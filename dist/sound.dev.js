"use strict";

var player = require('play-sound')(opts = {}); // $ mplayer foo.mp3 


var AUDIOFILE = 'example_aud.mp3';
player.play(AUDIOFILE, function (err) {
  if (err) throw err;
}); // { timeout: 300 } will be passed to child process

player.play(AUDIOFILE, {
  timeout: 300
}, function (err) {
  if (err) throw err;
}); // configure arguments for executable if any

player.play(AUDIOFILE, {
  afplay: ['-v', 1]
  /* lower volume for afplay on OSX */

}, function (err) {
  if (err) throw err;
}); // access the node child_process in case you need to kill it on demand

var audio = player.play(AUDIOFILE, function (err) {
  if (err && !err.killed) throw err;
});
audio.kill();