import homeHtml from './home.controller.html';

export default setRoute;

function setRoute($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/home', {
            template: homeHtml,
            controller: 'HomeController',
            controllerAs: 'vm',
            reloadOnSearch: false
        });
}
