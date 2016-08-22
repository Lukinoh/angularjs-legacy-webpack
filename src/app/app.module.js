import "./core/core.module.js";
import "./widgets/widgets.module";
import "./dashboard/dashboard.module";

angular.module('app', [
    'app.core',
    'app.widgets',
    'app.dashboard'
]);