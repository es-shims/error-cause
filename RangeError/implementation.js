'use strict';

var GetIntrinsic = require('get-intrinsic');

var $RangeError = GetIntrinsic('%RangeError%');

var setProto = require('es-abstract/helpers/setProto');

var InstallErrorCause = require('../InstallErrorCause');

var Error = require('../Error/polyfill')();

function RangeError(message) {
	var O = arguments.length > 1 ? new $RangeError(message, arguments[1]) : new $RangeError(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	O.constructor = RangeError;

	return O;
}

if (setProto) {
	setProto(RangeError, Error);
}

RangeError.prototype = $RangeError.prototype;

module.exports = RangeError;
