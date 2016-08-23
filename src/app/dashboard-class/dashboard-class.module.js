import DashboardClassController from "./dashboard-class.controller.js";
import setRoute from "./dashboard-class.route";

export default angular
    .module('app.dashboardClass', [])
    .config(setRoute)
    .controller('DashboardClassController', DashboardClassController)
    .name;
