'use strict';

var hasPropertyDescriptors = require('has-property-descriptors')();

var $SyntaxError = require('es-errors/syntax');

var DefineMethodProperty = require('es-abstract/2024/DefineMethodProperty');
var InstallErrorCause = require('es-abstract/2024/InstallErrorCause');
var setProto = require('es-abstract/helpers/setProto');

var Error = require('../Error/polyfill')();

function SyntaxError(message) {
	var O = arguments.length > 1 ? new $SyntaxError(message, arguments[1]) : new $SyntaxError(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	DefineMethodProperty(O, 'constructor', SyntaxError, false);

	return O;
}

if (setProto) {
	setProto(SyntaxError, Error);
}

SyntaxError.prototype = $SyntaxError.prototype;
if (hasPropertyDescriptors) {
	Object.defineProperty(SyntaxError, 'prototype', { writable: false });
}

module.exports = SyntaxError;
