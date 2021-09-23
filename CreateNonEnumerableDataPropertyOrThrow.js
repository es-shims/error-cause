'use strict';

var DefinePropertyOrThrow = require('es-abstract/2020/DefinePropertyOrThrow');

module.exports = function CreateNonEnumerableDataPropertyOrThrow(O, P, V) {
	var newDesc = {
		'[[Configurable]]': true,
		'[[Enumerable]]': false,
		'[[Value]]': V,
		'[[Writable]]': true
	};
	return DefinePropertyOrThrow(O, P, newDesc);
};
