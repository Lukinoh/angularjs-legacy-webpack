import imageSelectorRequire from './image-selector-require.controller.html';

export default setRoute;

function setRoute($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/image-selector-require', {
            template: imageSelectorRequire,
            controller: 'ImageSelectorRequireController',
            controllerAs: 'vm',
            reloadOnSearch: false
        });
}
