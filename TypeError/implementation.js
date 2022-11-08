'use strict';

var GetIntrinsic = require('get-intrinsic');
var hasPropertyDescriptors = require('has-property-descriptors')();

var $TypeError = GetIntrinsic('%TypeError%');

var CreateMethodProperty = require('es-abstract/2022/CreateMethodProperty');
var InstallErrorCause = require('es-abstract/2022/InstallErrorCause');
var setProto = require('es-abstract/helpers/setProto');

var Error = require('../Error/polyfill')();

function TypeError(message) {
	var O = arguments.length > 1 ? new $TypeError(message, arguments[1]) : new $TypeError(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	CreateMethodProperty(O, 'constructor', TypeError);

	return O;
}

if (setProto) {
	setProto(TypeError, Error);
}

TypeError.prototype = $TypeError.prototype;
if (hasPropertyDescriptors) {
	Object.defineProperty(TypeError, 'prototype', { writable: false });
}

module.exports = TypeError;
