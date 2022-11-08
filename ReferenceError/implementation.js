'use strict';

var GetIntrinsic = require('get-intrinsic');
var hasPropertyDescriptors = require('has-property-descriptors')();

var $ReferenceError = GetIntrinsic('%ReferenceError%');

var CreateMethodProperty = require('es-abstract/2022/CreateMethodProperty');
var InstallErrorCause = require('es-abstract/2022/InstallErrorCause');
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
