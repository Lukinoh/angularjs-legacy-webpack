import DashboardTsController from './dashboard-ts.controller';

describe('DashboardClassController', () => {
  let DashboardClassController: DashboardTsController;

  beforeEach(angular.mock.module('app.dashboardClass'));

  beforEach(inject((_DashboardClassController_) => {
    DashboardClassController = _DashboardClassController_;
  }));

  it('should activate', () => {
    DashboardClassController.activate();
    fail();
  });
});
