import miscellaneousHtml from "./miscellaneous.controller.html";

export default setRoute;

function setRoute($routeProvider) {
    'ngInject';
    $routeProvider
        .when('/miscellaneous', {
            template: miscellaneousHtml,
            controller: 'MiscellaneousController',
            controllerAs: 'vm',
            reloadOnSearch: false
        })
}
