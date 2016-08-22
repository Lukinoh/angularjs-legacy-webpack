import dashboardHtml from "./dashboard.controller.html";

export default setRoute;

/* @ngInject */
function setRoute($routeProvider) {

    $routeProvider
        .when('/dashboard', {
            template: dashboardHtml,
            controller: 'DashboardController',
            controllerAs: 'vm',
            reloadOnSearch: false
        })
}
