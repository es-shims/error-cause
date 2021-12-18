'use strict';

var GetIntrinsic = require('get-intrinsic');

var $SyntaxError = GetIntrinsic('%SyntaxError%');

var CreateMethodProperty = require('es-abstract/2021/CreateMethodProperty');
var setProto = require('es-abstract/helpers/setProto');

var InstallErrorCause = require('../InstallErrorCause');

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

module.exports = SyntaxError;
