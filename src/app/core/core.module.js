import ngRoute from "angular-route";
import blocksLogger from "../blocks/logger/logger.module";

import "./constants.js"
import "./core.route.js"

(function () {
    'use strict';

    angular.module('app.core', [
            blocksLogger,
            ngRoute
        ]);
})();
