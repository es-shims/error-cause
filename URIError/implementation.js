'use strict';

var hasPropertyDescriptors = require('has-property-descriptors')();

var $URIError = require('es-errors/uri');

var DefineMethodProperty = require('es-abstract/2024/DefineMethodProperty');
var InstallErrorCause = require('es-abstract/2024/InstallErrorCause');
var setProto = require('es-abstract/helpers/setProto');

var Error = require('../Error/polyfill')();

function URIError(message) {
	var O = arguments.length > 1 ? new $URIError(message, arguments[1]) : new $URIError(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	DefineMethodProperty(O, 'constructor', URIError, false);

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
