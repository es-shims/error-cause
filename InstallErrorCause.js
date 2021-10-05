'use strict';

var Get = require('es-abstract/2021/Get');
var HasProperty = require('es-abstract/2021/HasProperty');
var Type = require('es-abstract/2021/Type');

var CreateNonEnumerableDataPropertyOrThrow = require('./CreateNonEnumerableDataPropertyOrThrow');

// TODO: replace with 2022 implementation once available
module.exports = function InstallErrorCause(O, options) {
	if (Type(options) === 'Object' && HasProperty(options, 'cause')) {
		var cause = Get(options, 'cause');
		CreateNonEnumerableDataPropertyOrThrow(O, 'cause', cause);
	}
};
