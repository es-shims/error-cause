'use strict';

var hasPropertyDescriptors = require('has-property-descriptors')();
var $AggregateError = require('es-aggregate-error/polyfill')();

var setProto = require('es-abstract/helpers/setProto');

var CreateMethodProperty = require('es-abstract/2022/CreateMethodProperty');
var InstallErrorCause = require('es-abstract/2022/InstallErrorCause');
var ToString = require('es-abstract/2022/ToString');

var Error = require('../Error/polyfill')();

function AggregateError(errors, message) {
	// ensure observable argument validation order
	if (!(this instanceof AggregateError)) {
		return arguments.length > 2
			? new AggregateError(errors, message, arguments[2])
			: new AggregateError(errors, message);
	}
	var strMessage = typeof message === 'undefined' ? message : ToString(message);
	var options = arguments.length > 2 ? {} : void undefined;
	if (arguments.length > 2) {
		InstallErrorCause(options, arguments[2]);
	}

	var O = arguments.length > 2
		? new $AggregateError(errors, strMessage, options)
		: new $AggregateError(errors, strMessage);

	InstallErrorCause(O, options);

	CreateMethodProperty(O, 'constructor', AggregateError);

	return O;
}

if (setProto) {
	setProto(AggregateError, Error);
}

AggregateError.prototype = $AggregateError.prototype;
if (hasPropertyDescriptors) {
	Object.defineProperty(AggregateError, 'prototype', { writable: false });
}

module.exports = AggregateError;
