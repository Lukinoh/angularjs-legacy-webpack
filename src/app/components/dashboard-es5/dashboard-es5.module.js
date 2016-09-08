import DashboardEs5Controller from './dashboard-es5.controller';
import setRoute from './dashboard-es5.route';

export default angular
    .module('app.dashboardEs5', [])
    .config(setRoute)
    .controller('DashboardEs5Controller', DashboardEs5Controller)
    .name;
