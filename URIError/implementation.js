'use strict';

var GetIntrinsic = require('get-intrinsic');
var hasPropertyDescriptors = require('has-property-descriptors')();

var $URIError = GetIntrinsic('%URIError%');

var CreateMethodProperty = require('es-abstract/2022/CreateMethodProperty');
var InstallErrorCause = require('es-abstract/2022/InstallErrorCause');
var setProto = require('es-abstract/helpers/setProto');

var Error = require('../Error/polyfill')();

function URIError(message) {
	var O = arguments.length > 1 ? new $URIError(message, arguments[1]) : new $URIError(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	CreateMethodProperty(O, 'constructor', URIError);

	return O;
}

if (setProto) {
	setProto(URIError, Error);
}

URIError.prototype = $URIError.prototype;
if (hasPropertyDescriptors) {
	Object.defineProperty(URIError, 'prototype', { writable: false });
}

module.exports = URIError;
