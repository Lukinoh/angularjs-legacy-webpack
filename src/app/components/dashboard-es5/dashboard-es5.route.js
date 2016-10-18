import dashboardEs5Html from './dashboard-es5.controller.html';

export default setRoute;

function setRoute($routeProvider, AuthorizationMethodsService) {
  'ngInject';
  $routeProvider
    .when('/dashboard-es5', {
      template: dashboardEs5Html,
      controller: 'DashboardEs5Controller',
      controllerAs: 'vm',
      reloadOnSearch: false,
      data: {
        permissions: {
          only: ['ADMIN', 'USER'],
          redirectTo: AuthorizationMethodsService.redirectToHome
        }
      }
    });
}
