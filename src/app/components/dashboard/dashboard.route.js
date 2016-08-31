import dashboardHtml from './dashboard.controller.html';

export default setRoute;

function setRoute($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/dashboard', {
            template: dashboardHtml,
            controller: 'DashboardController',
            controllerAs: 'vm',
            reloadOnSearch: false
        });
}
