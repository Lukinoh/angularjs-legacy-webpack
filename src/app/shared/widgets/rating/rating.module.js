import RatingDirective from "./rating.directive";

export default angular
    .module('app.widgets.rating', [])
    .directive('rating', RatingDirective)
    .name;
