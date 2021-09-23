'use strict';

var test = require('tape');
var forEach = require('for-each');

var constructors = require('../');

var runTests = require('./tests');

test('Error cause', function (t) {
	t.ok(Array.isArray(constructors), 'main export is an array');

	t.test('constructors', function (st) {
		forEach(constructors, function (Constructor) {
			var bound = require('../' + Constructor); // eslint-disable-line global-require

			st.test(Constructor + ': as a function', function (s2t) {
				runTests(bound, Constructor, s2t);

				s2t.end();
			});
		});

		st.end();
	});

	t.end();
});
