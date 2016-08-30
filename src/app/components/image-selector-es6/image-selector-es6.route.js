import imageSelectorEs6 from "./image-selector-es6.controller.html";

export default setRoute;

function setRoute($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/image-selector-es6', {
            template: imageSelectorEs6,
            controller: 'ImageSelectorEs6Controller',
            controllerAs: 'vm',
            reloadOnSearch: false
        })
}
