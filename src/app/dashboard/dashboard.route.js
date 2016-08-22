(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .config(setRoute);

    /* @ngInject */
    function setRoute($routeProvider) {

        $routeProvider
            .when('/dashboard', {
                templateUrl: '/app/dashboard/dashboard.controller.html',
                controller: 'DashboardController',
                controllerAs: 'vm',
                reloadOnSearch: false
            })
    }
})();
