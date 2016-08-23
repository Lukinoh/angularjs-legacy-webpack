import DashboardTsController from "./dashboard-ts.controller.ts";
import setRoute from "./dashboard-ts.route.ts";

export default angular
    .module('app.dashboardTs', [])
    .config(setRoute)
    .controller('DashboardTsController', DashboardTsController)
    .name;
