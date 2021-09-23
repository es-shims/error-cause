'use strict';

var Get = require('es-abstract/2020/Get');
var HasProperty = require('es-abstract/2020/HasProperty');
var Type = require('es-abstract/2020/Type');

var CreateNonEnumerableDataPropertyOrThrow = require('./CreateNonEnumerableDataPropertyOrThrow');

module.exports = function InstallErrorCause(O, options) {
	if (Type(options) === 'Object' && HasProperty(options, 'cause')) {
		var cause = Get(options, 'cause');
		CreateNonEnumerableDataPropertyOrThrow(O, 'cause', cause);
	}
};
