import appCore from "./core/core.module.js";
import appWidgets from "./widgets/widgets.module";
import appDashboard from "./dashboard/dashboard.module";
import appDashboardClass from "./dashboard-class/dashboard-class.module";
import appDashboardTs from "./dashboard-ts/dashboard-ts.module";
import appDashboardNgIncluded from "./dashboard-ng-included/dashboard-ng-included.module";
import appImageSelector from "./image-selector/image-selector.module";

export default angular
    .module('app', [
        appCore,
        appWidgets,
        appDashboard,
        appDashboardClass,
        appDashboardTs,
        appDashboardNgIncluded,
        appImageSelector
    ])
    .name;