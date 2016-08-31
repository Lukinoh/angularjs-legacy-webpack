const dashboardTsHtml = require('./dashboard-ts.controller.html');

export default setRoute;

function setRoute($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/dashboard-ts', {
            template: dashboardTsHtml,
            controller: 'DashboardTsController',
            controllerAs: 'vm',
            reloadOnSearch: false
        });
}
