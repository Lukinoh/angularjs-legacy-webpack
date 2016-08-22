import DashboardController from "./dashboard.controller.js";
import setRoute from "./dashboard.route";

angular.module('app.dashboard', [])
    .config(setRoute)
    .controller('DashboardController', DashboardController);
