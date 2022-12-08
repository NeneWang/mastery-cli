#!/usr/bin/env node
"use strict";

var dirName = process.argv[2];

var _require = require('child_process'),
    exec = _require.exec;

var cb = function cb(error, stdout, stderr) {
  if (error) {
    console.error("exec error: ".concat(error));
    return;
  }

  console.log("stdout: ".concat(stdout));
  console.error("stderr: ".concat(stderr));
};

exec("mkdir -p ".concat(dirName), cb);