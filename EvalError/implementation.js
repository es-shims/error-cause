'use strict';

var GetIntrinsic = require('get-intrinsic');

var $EvalError = GetIntrinsic('%EvalError%');

var setProto = require('es-abstract/helpers/setProto');

var InstallErrorCause = require('../InstallErrorCause');

var Error = require('../Error/polyfill')();

function EvalError(message) {
	var O = arguments.length > 1 ? new $EvalError(message, arguments[1]) : new $EvalError(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	O.constructor = EvalError;

	return O;
}

if (setProto) {
	setProto(EvalError, Error);
}

EvalError.prototype = $EvalError.prototype;

module.exports = EvalError;
