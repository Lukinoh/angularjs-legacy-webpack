import imageSelector from "./image-selector.controller.html";

export default setRoute;

/* @ngInject */
function setRoute($routeProvider) {

    $routeProvider
        .when('/image-selector', {
            template: imageSelector,
            controller: 'ImageSelectorController',
            controllerAs: 'vm',
            reloadOnSearch: false
        })
}
