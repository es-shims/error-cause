'use strict';

var implementation = require('./implementation');
var polyfillHelper = require('../helpers/polyfill');

module.exports = polyfillHelper(RangeError, implementation);
