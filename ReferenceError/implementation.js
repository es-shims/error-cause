'use strict';

var hasPropertyDescriptors = require('has-property-descriptors')();

var $ReferenceError = require('es-errors/ref');

var CreateMethodProperty = require('es-abstract/2023/CreateMethodProperty');
var InstallErrorCause = require('es-abstract/2023/InstallErrorCause');
var setProto = require('es-abstract/helpers/setProto');

var Error = require('../Error/polyfill')();

function ReferenceError(message) {
	var O = arguments.length > 1 ? new $ReferenceError(message, arguments[1]) : new $ReferenceError(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	CreateMethodProperty(O, 'constructor', ReferenceError);

	return O;
}

if (setProto) {
	setProto(ReferenceError, Error);
}

ReferenceError.prototype = $ReferenceError.prototype;
if (hasPropertyDescriptors) {
	Object.defineProperty(ReferenceError, 'prototype', { writable: false });
}

module.exports = ReferenceError;
