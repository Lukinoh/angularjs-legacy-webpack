import googleClosure from './google-closure.controller.html';

export default setRoute;

function setRoute($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/google-closure', {
      template: googleClosure,
      controller: 'GoogleClosureController',
      controllerAs: 'vm',
      reloadOnSearch: false
    });
}
