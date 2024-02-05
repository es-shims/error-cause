'use strict';

var hasPropertyDescriptors = require('has-property-descriptors')();

var $RangeError = require('es-errors/range');

var CreateMethodProperty = require('es-abstract/2023/CreateMethodProperty');
var InstallErrorCause = require('es-abstract/2023/InstallErrorCause');
var setProto = require('es-abstract/helpers/setProto');

var Error = require('../Error/polyfill')();

function RangeError(message) {
	var O = arguments.length > 1 ? new $RangeError(message, arguments[1]) : new $RangeError(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	CreateMethodProperty(O, 'constructor', RangeError);

	return O;
}

if (setProto) {
	setProto(RangeError, Error);
}

RangeError.prototype = $RangeError.prototype;
if (hasPropertyDescriptors) {
	Object.defineProperty(RangeError, 'prototype', { writable: false });
}

module.exports = RangeError;
