import ngRoute from "angular-route";
import toastr from "toastr";
import _ from "lodash";
import goog from "./closure/closure"; // This is a hack, we should remove closure in future...
import setRoute from "./core.route";
import blocksLogger from "../blocks/logger/logger.module";

export default angular
    .module('app.core', [
        blocksLogger,
        ngRoute
    ])
    .config(setRoute)
    .constant('toastr', toastr)
    .constant('_', _)
    .constant('goog', goog)
    .name;
