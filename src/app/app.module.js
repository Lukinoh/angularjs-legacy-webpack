import appCore from "./core/core.module.js";
import appWidgets from "./widgets/widgets.module";
import appDashboard from "./dashboard/dashboard.module";
import appDashboardClass from "./dashboard-class/dashboard-class.module";
import appDashboardTs from "./dashboard-ts/dashboard-ts.module";
import appDashboardNgIncluded from "./dashboard-ng-included/dashboard-ng-included.module";
import appImageSelectorEs6 from "./image-selector-es6/image-selector-es6.module";
import appImageSelectorRequire from "./image-selector-require/image-selector-require.module";
import appGoogleClosure from "./google-closure/google-closure.module";
import appHome from "./home/home.module";
import appFontZarbi from "./font-zarbi/font-zarbi.module";

export default angular
    .module('app', [
        appCore,
        appWidgets,
        appDashboard,
        appDashboardClass,
        appDashboardTs,
        appDashboardNgIncluded,
        appImageSelectorEs6,
        appImageSelectorRequire,
        appImageSelectorRequire,
        appGoogleClosure,
        appHome,
        appFontZarbi
    ])
    .name;