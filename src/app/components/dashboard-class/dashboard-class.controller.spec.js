import DashboardClassController from './dashboard-class.controller';

describe('DashboardClassController', () => {
  let DashboardClassController;

  beforeEach(angular.mock.module('app.dashboardClass'));

  beforEach(inject((_DashboardClassController_) => {
    DashboardClassController = _DashboardClassController_;
  }));

  it('should activate', () => {
    DashboardClassController.activate();
    fail();
  });
});
