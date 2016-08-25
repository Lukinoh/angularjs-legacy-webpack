import dashboardNgIncludedHtml from "./dashboard-ng-included.controller.html";

export default setRoute;

/* @ngInject */
function setRoute($routeProvider) {

    $routeProvider
        .when('/dashboard-ng-included', {
            template: dashboardNgIncludedHtml,
            controller: 'DashboardNgIncludedController',
            controllerAs: 'vm',
            reloadOnSearch: false
        })
}
