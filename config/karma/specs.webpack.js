/**
 * This file is an entry point for angular tests.
 * Avoids some weird issues when using webpack + angular.
 * */

// FIXME: Possibility to write it in ES6 (should add it to the transpiler webpack probably.

require('angular-mocks/angular-mocks');


// Here you can put your init stuff...
beforeEach(angular.mock.module('app'));

const testsContext = require.context('../../src/', true, /.spec$/);
testsContext.keys().forEach(testsContext);