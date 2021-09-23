'use strict';

var originals = {
	Error: Error,
	AggregateError: typeof AggregateError === 'undefined' ? undefined : AggregateError,
	EvalError: EvalError,
	RangeError: RangeError,
	ReferenceError: ReferenceError,
	SyntaxError: SyntaxError,
	TypeError: TypeError,
	URIError: URIError
};

require('../auto');

var test = require('tape');
var forEach = require('for-each');
var defineProperties = require('define-properties');
var globalThis = require('globalthis')();
var functionName = require('function.prototype.name');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var constructors = require('../');
var runTests = require('./tests');

forEach(constructors, function (Constructor) {
	test(Constructor + ': shimmed', function (t) {
		t.match(String(globalThis[Constructor].length), /^1|2$/, Constructor + ' has a length of 1 or 2');

		t.test(Constructor + ': function name', { skip: !functionsHaveNames }, function (st) {
			st.equal(globalThis[Constructor].name, Constructor, Constructor + ' has name "' + Constructor + '"');
			st.end();
		});

		t.test(Constructor + ': enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
			et.equal(false, isEnumerable.call(globalThis, Constructor), 'globalThis.' + Constructor + ' is not enumerable');
			et.end();
		});

		runTests(globalThis[Constructor], Constructor, t);

		if (originals[Constructor]) {
			t.ok(
				new originals[Constructor]([]) instanceof globalThis[Constructor],
				'instance of original `' + functionName(originals[Constructor]) + '` is `instanceof` new ' + Constructor
			);
		}

		if (Constructor !== 'Error') {
			var instance = new globalThis[Constructor]([]);
			t.ok(instance instanceof originals.Error, Constructor + ' instance is `instanceof` original `Error`');
			t.ok(instance instanceof globalThis.Error, Constructor + ' instance is `instanceof` current global `Error`');
		}

		t.end();
	});
});
