'use strict';

var hasPropertyDescriptors = require('has-property-descriptors')();

var $EvalError = require('es-errors/eval');

var DefineMethodProperty = require('es-abstract/2024/DefineMethodProperty');
var InstallErrorCause = require('es-abstract/2024/InstallErrorCause');
var setProto = require('es-abstract/helpers/setProto');

var Error = require('../Error/polyfill')();

function EvalError(message) {
	var O = arguments.length > 1 ? new $EvalError(message, arguments[1]) : new $EvalError(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	DefineMethodProperty(O, 'constructor', EvalError, false);

	return O;
}

if (setProto) {
	setProto(EvalError, Error);
}

EvalError.prototype = $EvalError.prototype;
if (hasPropertyDescriptors) {
	Object.defineProperty(EvalError, 'prototype', { writable: false });
}

module.exports = EvalError;
