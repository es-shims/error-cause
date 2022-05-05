'use strict';

var GetIntrinsic = require('get-intrinsic');
var hasPropertyDescriptors = require('has-property-descriptors')();
var CreateMethodProperty = require('es-abstract/2021/CreateMethodProperty');
var setProto = require('es-abstract/helpers/setProto');

var $Error = GetIntrinsic('%Error%');

var InstallErrorCause = require('../InstallErrorCause');

function Error(message) {
	var O = arguments.length > 1 ? new $Error(message, arguments[1]) : new $Error(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	CreateMethodProperty(O, 'constructor', Error);

	return O;
}

if (setProto) {
	setProto(Error, $Error);
}

Error.prototype = $Error.prototype;
if (hasPropertyDescriptors) {
	Object.defineProperty(Error, 'prototype', { writable: false });
}

module.exports = Error;
