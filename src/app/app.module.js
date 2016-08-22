import appCore from "./core/core.module.js";
import appWidgets from "./widgets/widgets.module";
import appDashboard from "./dashboard/dashboard.module";

angular.module('app', [
    appCore,
    appWidgets,
    appDashboard
]);