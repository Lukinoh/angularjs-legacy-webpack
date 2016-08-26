import imageSelectorRequire from "./image-selector-require.controller.html";

export default setRoute;

/* @ngInject */
function setRoute($routeProvider) {

    $routeProvider
        .when('/image-selector-require', {
            template: imageSelectorRequire,
            controller: 'ImageSelectorRequireController',
            controllerAs: 'vm',
            reloadOnSearch: false
        })
}
