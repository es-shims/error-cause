'use strict';

module.exports = function polyfillHelper(C, implementation) {
	return function polyfill() {
		var options = { cause: { sentinel: true } };
		var e = new C('a', options);
		if ('cause' in e && !('cause' in C.prototype) && e.cause === options.cause) {
			return C;
		}
		return implementation;
	};
};
