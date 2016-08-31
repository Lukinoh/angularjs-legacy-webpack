import DashboardController from './dashboard.controller';
import setRoute from './dashboard.route';

export default angular
    .module('app.dashboard', [])
    .config(setRoute)
    .controller('DashboardController', DashboardController)
    .name;
