'use strict';

var GetIntrinsic = require('get-intrinsic');
var setProto = require('es-abstract/helpers/setProto');

var $Error = GetIntrinsic('%Error%');

var InstallErrorCause = require('../InstallErrorCause');

function Error(message) {
	var O = arguments.length > 1 ? new $Error(message, arguments[1]) : new $Error(message);

	InstallErrorCause(O, arguments.length > 1 && arguments[1]);

	O.constructor = Error;

	return O;
}

if (setProto) {
	setProto(Error, $Error);
}

Error.prototype = $Error.prototype;

module.exports = Error;
