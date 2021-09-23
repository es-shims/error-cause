'use strict';

var Error = require('./Error/shim');
var AggregateError = require('./AggregateError/shim');
var EvalError = require('./EvalError/shim');
var RangeError = require('./RangeError/shim');
var ReferenceError = require('./ReferenceError/shim');
var SyntaxError = require('./SyntaxError/shim');
var TypeError = require('./TypeError/shim');
var URIError = require('./URIError/shim');

module.exports = function shim() {
	Error();
	AggregateError();
	EvalError();
	RangeError();
	ReferenceError();
	SyntaxError();
	TypeError();
	URIError();
};
