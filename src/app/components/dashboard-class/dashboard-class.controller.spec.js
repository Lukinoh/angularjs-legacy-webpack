import DashboardClassController from './dashboard-class.controller';
import appDashboardClass from 'app/components/dashboard-class/dashboard-class.module';

describe('DashboardClassController', () => {
  let DashboardClassController;

  beforeEach(angular.mock.module(appDashboardClass));

  beforEach(inject((_DashboardClassController_) => {
    DashboardClassController = _DashboardClassController_;
  }));

  it('should activate', () => {
    DashboardClassController.activate();
    fail();
  });
});
