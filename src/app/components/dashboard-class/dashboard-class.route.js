import dashboardClassHtml from './dashboard-class.controller.html';

export default setRoute;

function setRoute($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/dashboard-class', {
            template: dashboardClassHtml,
            controller: 'DashboardClassController',
            controllerAs: 'vm',
            reloadOnSearch: false
        });
}
