export default setRoute;

/* @ngInject */
function setRoute($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/dashboard'
    });
}