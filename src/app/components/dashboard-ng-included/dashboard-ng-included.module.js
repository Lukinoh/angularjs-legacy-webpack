import DashboardNgIncludedController from './dashboard-ng-included.controller';
import setRoute from './dashboard-ng-included.route';
import dashboardContent from './dashboard-content.template.html';

export default angular
    .module('app.dashboardNgIncluded', [])
    .config(setRoute)
    .controller('DashboardNgIncludedController', DashboardNgIncludedController)
    .run(function ($templateCache) {
        'ngInject';

        // Put in cache the files that are ng-include'd in templates
        $templateCache.put('dashboard-ng-included/dashboard-content.template.html', dashboardContent);
    })
    .name;
