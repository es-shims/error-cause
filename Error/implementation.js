'use strict';

var hasPropertyDescriptors = require('has-property-descriptors')();
var DefineMethodProperty = require('es-abstract/2025/DefineMethodProperty');
var InstallErrorCause = require('es-abstract/2025/InstallErrorCause');
var setProto = require('set-proto');

var $Error = require('es-errors');

function Error(message) {
	var O = arguments.length > 1 ? new $Error(message, arguments[1]) : new $Error(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	DefineMethodProperty(O, 'constructor', Error, false);

	return O;
}

if (setProto) {
	setProto(Error, $Error);
}

Error.prototype = $Error.prototype;
if (hasPropertyDescriptors) {
	Object.defineProperty(Error, 'prototype', { writable: false });
}

module.exports = Error;
