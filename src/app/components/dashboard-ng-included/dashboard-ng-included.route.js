import dashboardNgIncludedHtml from './dashboard-ng-included.controller.html';

export default setRoute;

function setRoute($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/dashboard-ng-included', {
      controller: 'DashboardNgIncludedController',
      controllerAs: 'vm',
      reloadOnSearch: false,
      template: dashboardNgIncludedHtml
    });
}
