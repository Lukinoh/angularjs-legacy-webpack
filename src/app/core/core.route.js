(function() {
    'use strict';

    angular
        .module('app.core')
        .config(setRoute);

    /* @ngInject */
    function setRoute($routeProvider) {
        $routeProvider.otherwise({
            redirectTo: '/dashboard'
        });
    }
})();
