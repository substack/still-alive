#!/usr/bin/env node

var baudio = require('baudio');
var b = baudio(require('./index.js'));
b.play();
