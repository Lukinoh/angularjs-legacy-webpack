export default setRoute;

function setRoute($routeProvider) {
    'ngInject';
    $routeProvider.otherwise({
        redirectTo: '/dashboard'
    });
}