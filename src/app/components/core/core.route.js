export default setRoute;

function setRoute($routeProvider) {
    'ngInject';
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}
