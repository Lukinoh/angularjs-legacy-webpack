/**
 * This file is an entry point for angular tests.
 * Avoids some weird issues when using webpack + angular.
 * */

require('angular-mocks/angular-mocks');


// Here you can put your init stuff...
beforeEach(angular.mock.module('app'));

const testsContext = require.context('../../src/', true, /.spec$/);
testsContext.keys().forEach(testsContext);