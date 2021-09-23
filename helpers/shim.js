'use strict';

var define = require('define-properties');
var globalThis = require('globalthis')();
var setProto = require('es-abstract/helpers/setProto');

var trueThunk = function () {
	return true;
};

module.exports = function shimHelper(name, getPolyfill) {
	return function shim() {
		var original = globalThis[name];
		if (original) {
			delete original.prototype.cause; // fix a bug in node v16.9's v8 (https://bugs.chromium.org/p/v8/issues/detail?id=12006)
		}

		var polyfill = getPolyfill();

		if (original !== polyfill) {
			var o = {};
			o[name] = polyfill;
			var p = {};
			p[name] = trueThunk;
			define(globalThis, o, p);

			if (setProto && name !== 'Error') {
				setProto(polyfill, Error);
			}
		}

		return polyfill;
	};
};
