'use strict';

var test = require('tape');
var forEach = require('for-each');

var Constructors = require('../');
var runTests = require('./tests');

forEach(Constructors, function (Constructor) {
	test(Constructor + ': as a function', function (t) {
		var implementation = require('../' + Constructor + '/implementation'); // eslint-disable-line global-require

		runTests(implementation, Constructor, t);
		t.end();
	});
});

