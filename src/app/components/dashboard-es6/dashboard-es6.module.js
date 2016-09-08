import DashboardEs6Controller from './dashboard-es6.controller';
import setRoute from './dashboard-es6.route';

export default angular
    .module('app.dashboardEs6', [])
    .config(setRoute)
    .controller('DashboardEs6Controller', DashboardEs6Controller)
    .name;
