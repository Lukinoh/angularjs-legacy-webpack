import DashboardTsController from './dashboard-ts.controller';
import setRoute from './dashboard-ts.route';

export default angular
    .module('app.dashboardTs', [])
    .config(setRoute)
    .controller('DashboardTsController', DashboardTsController)
    .name;
