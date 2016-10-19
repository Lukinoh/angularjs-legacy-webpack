import dashboardEs6Html from './dashboard-es6.controller.html';

export default setRoute;

function setRoute($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/dashboard-es6', {
      template: dashboardEs6Html,
      controller: 'DashboardEs6Controller',
      controllerAs: 'vm',
      reloadOnSearch: false
    });
}
