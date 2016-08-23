import appCore from "./core/core.module.js";
import appWidgets from "./widgets/widgets.module";
import appDashboard from "./dashboard/dashboard.module";
import appDashboardClass from "./dashboard-class/dashboard-class.module";

export default angular
    .module('app', [
        appCore,
        appWidgets,
        appDashboard,
        appDashboardClass
    ])
    .name;


// Next thing to do:
// 1° Add ng-annotate and verify that it works DONE
// 2° Add scss management
// 3° Add ts pages for Philippe
// 4° More doc and problem facing like the one with the module, write it down !!! Office 2016 on Linux

// Evolving from ES5 to ES6
// Means evolving from non-module like website to module like website.