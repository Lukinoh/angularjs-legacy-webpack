import ratingHtml from './rating.directive.html';

export default RatingDirective;

function RatingDirective() {
  'ngInject';

  return {
    bindToController: true,
    controller: RatingController,
    controllerAs: 'vm',
    replace: 'true',
    restrict: 'E',
    scope: {
      value: '='
    },
    template: ratingHtml
  };
}

/* @ngInject */
function RatingController(_) {
  var vm = this;

  vm.range = range;

  // //////////////

  function range(n) {
    return _.range(n);
  }

}
