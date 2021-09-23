'use strict';

var GetIntrinsic = require('get-intrinsic');

var $TypeError = GetIntrinsic('%TypeError%');

var setProto = require('es-abstract/helpers/setProto');

var InstallErrorCause = require('../InstallErrorCause');

var Error = require('../Error/polyfill')();

function TypeError(message) {
	var O = arguments.length > 1 ? new $TypeError(message, arguments[1]) : new $TypeError(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	O.constructor = TypeError;

	return O;
}

if (setProto) {
	setProto(TypeError, Error);
}

TypeError.prototype = $TypeError.prototype;

module.exports = TypeError;
