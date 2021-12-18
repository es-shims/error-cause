'use strict';

var GetIntrinsic = require('get-intrinsic');

var $ReferenceError = GetIntrinsic('%ReferenceError%');

var CreateMethodProperty = require('es-abstract/2021/CreateMethodProperty');
var setProto = require('es-abstract/helpers/setProto');

var InstallErrorCause = require('../InstallErrorCause');

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

module.exports = ReferenceError;
