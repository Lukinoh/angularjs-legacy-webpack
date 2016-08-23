const dashboardTsHtml = require('./dashboard-ts.controller.html');

export default setRoute;

/* @ngInject */
function setRoute($routeProvider) {

    $routeProvider
        .when('/dashboard-ts', {
            template: dashboardTsHtml,
            controller: 'DashboardTsController',
            controllerAs: 'vm',
            reloadOnSearch: false
        })
}
