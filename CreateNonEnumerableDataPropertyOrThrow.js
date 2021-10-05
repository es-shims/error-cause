'use strict';

var DefinePropertyOrThrow = require('es-abstract/2021/DefinePropertyOrThrow');

// TODO: replace with 2022 implementation once available
module.exports = function CreateNonEnumerableDataPropertyOrThrow(O, P, V) {
	var newDesc = {
		'[[Configurable]]': true,
		'[[Enumerable]]': false,
		'[[Value]]': V,
		'[[Writable]]': true
	};
	return DefinePropertyOrThrow(O, P, newDesc);
};
