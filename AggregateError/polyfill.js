'use strict';

var AggregateError = require('es-aggregate-error/polyfill')();
var implementation = require('./implementation');
var polyfillHelper = require('../helpers/polyfill');

module.exports = polyfillHelper(AggregateError, implementation);
