import imageSelectorEs6 from "./image-selector-es6.controller.html";

export default setRoute;

/* @ngInject */
function setRoute($routeProvider) {

    $routeProvider
        .when('/image-selector-es6', {
            template: imageSelectorEs6,
            controller: 'ImageSelectorEs6Controller',
            controllerAs: 'vm',
            reloadOnSearch: false
        })
}
