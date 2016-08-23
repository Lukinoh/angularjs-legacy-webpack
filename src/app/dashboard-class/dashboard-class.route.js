import dashboardClassHtml from "./dashboard-class.controller.html";

export default setRoute;

/* @ngInject */
function setRoute($routeProvider) {

    $routeProvider
        .when('/dashboard-class', {
            template: dashboardClassHtml,
            controller: 'DashboardClassController',
            controllerAs: 'vm',
            reloadOnSearch: false
        })
}
