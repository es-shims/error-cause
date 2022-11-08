'use strict';

var GetIntrinsic = require('get-intrinsic');
var hasPropertyDescriptors = require('has-property-descriptors')();

var $EvalError = GetIntrinsic('%EvalError%');

var CreateMethodProperty = require('es-abstract/2022/CreateMethodProperty');
var InstallErrorCause = require('es-abstract/2022/InstallErrorCause');
var setProto = require('es-abstract/helpers/setProto');

var Error = require('../Error/polyfill')();

function EvalError(message) {
	var O = arguments.length > 1 ? new $EvalError(message, arguments[1]) : new $EvalError(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	CreateMethodProperty(O, 'constructor', EvalError);

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
