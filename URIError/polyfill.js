'use strict';

var polyfillHelper = require('../helpers/polyfill');
var implementation = require('./implementation');

module.exports = polyfillHelper(URIError, implementation);
