'use strict';

var hasPropertyDescriptors = require('has-property-descriptors')();

module.exports = function (Constructor, name, t) {
	t.equal(typeof Constructor, 'function', 'constructor is a function');
	t.notOk('cause' in Constructor.prototype, '`cause` is not a property on `' + name + '.prototype`');

	if (hasPropertyDescriptors) {
		t.deepEqual(
			Object.getOwnPropertyDescriptor(Constructor, 'prototype'),
			{
				configurable: false,
				enumerable: false,
				value: Constructor.prototype,
				writable: false
			}
		);
	}

	var options = { cause: {} };
	var errors = [{}];
	var instance = Constructor.length === 1 ? new Constructor('message', options) : new Constructor(errors, 'message 2', options);

	t.ok(instance instanceof Constructor, name + ' instance is `instanceof ' + name + '`');

	t.notOk(Object.prototype.propertyIsEnumerable.call(instance, 'constructor'), 'instance has non-enumerable `constructor` property');
	t.ok(Object.prototype.hasOwnProperty.call(instance, 'cause'), 'instance has own `cause` property');
	t.equal(instance.cause, options.cause, name + ' instance has `cause` property matching passed-in cause');

	if (Constructor.length > 1) {
		t.deepEqual(instance.errors, errors);
	}
};
