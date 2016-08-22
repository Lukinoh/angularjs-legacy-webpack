import toastr from "toastr";
import _ from "lodash";

(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('_', _);
})();
