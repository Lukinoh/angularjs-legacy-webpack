import fontZarbi from "./font-zarbi.controller.html";

export default setRoute;

function setRoute($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/font-zarbi', {
            template: fontZarbi,
            controller: 'FontZarbiController',
            controllerAs: 'vm',
            reloadOnSearch: false
        })
}
