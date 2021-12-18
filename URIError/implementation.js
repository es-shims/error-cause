'use strict';

var GetIntrinsic = require('get-intrinsic');

var $URIError = GetIntrinsic('%URIError%');

var CreateMethodProperty = require('es-abstract/2021/CreateMethodProperty');
var setProto = require('es-abstract/helpers/setProto');

var InstallErrorCause = require('../InstallErrorCause');

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

module.exports = URIError;
