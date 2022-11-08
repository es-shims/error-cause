'use strict';

var GetIntrinsic = require('get-intrinsic');
var hasPropertyDescriptors = require('has-property-descriptors')();

var $SyntaxError = GetIntrinsic('%SyntaxError%');

var CreateMethodProperty = require('es-abstract/2022/CreateMethodProperty');
var InstallErrorCause = require('es-abstract/2022/InstallErrorCause');
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
