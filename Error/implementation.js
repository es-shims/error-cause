'use strict';

var hasPropertyDescriptors = require('has-property-descriptors')();
var CreateMethodProperty = require('es-abstract/2023/CreateMethodProperty');
var InstallErrorCause = require('es-abstract/2023/InstallErrorCause');
var setProto = require('es-abstract/helpers/setProto');

var $Error = require('es-errors');

function Error(message) {
	var O = arguments.length > 1 ? new $Error(message, arguments[1]) : new $Error(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	CreateMethodProperty(O, 'constructor', Error);

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
