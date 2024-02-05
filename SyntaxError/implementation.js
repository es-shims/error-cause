'use strict';

var hasPropertyDescriptors = require('has-property-descriptors')();

var $SyntaxError = require('es-errors/syntax');

var CreateMethodProperty = require('es-abstract/2023/CreateMethodProperty');
var InstallErrorCause = require('es-abstract/2023/InstallErrorCause');
var setProto = require('es-abstract/helpers/setProto');

var Error = require('../Error/polyfill')();

function SyntaxError(message) {
	var O = arguments.length > 1 ? new $SyntaxError(message, arguments[1]) : new $SyntaxError(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	CreateMethodProperty(O, 'constructor', SyntaxError);

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
