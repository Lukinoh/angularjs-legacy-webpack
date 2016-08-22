import ngRoute from "angular-route";
import toastr from "toastr";
import _ from "lodash";
import setRoute from "./core.route";
import "../blocks/logger/logger.module";

angular.module('app.core', [
    'blocks.logger',
    ngRoute
])
    .config(setRoute)
    .constant('toastr', toastr)
    .constant('_', _);