import bootstrapSassHtml from './bootstrap-sass.controller.html';

export default setRoute;

function setRoute($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/bootstrap-sass', {
            template: bootstrapSassHtml,
            controller: 'BootstrapSassController',
            controllerAs: 'vm',
            reloadOnSearch: false
        });
}
