import ratingHtml from "./rating.directive.html";

export default RatingDirective;

function RatingDirective() {
    'ngInject';

    return {
        restrict: 'E',
        scope: {
            value: '='
        },
        template: ratingHtml,
        replace: 'true',
        controller: RatingController,
        controllerAs: 'vm',
        bindToController: true
    };
}

/* @ngInject */
function RatingController(_) {
    var vm = this;

    vm.range = range;

    ////////////////

    function range(n) {
        return _.range(n);
    }

}
