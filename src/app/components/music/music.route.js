import musicHtml from "./music.controller.html";

export default setRoute;

function setRoute($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/music', {
            template: musicHtml,
            controller: 'MusicController',
            controllerAs: 'vm',
            reloadOnSearch: false
        })
}
