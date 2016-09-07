import DashboardTsController from './dashboard-ts.controller';
import appDashboardTs from 'app/components/dashboard-ts/dashboard-ts.module';

describe('DashboardClassController', () => {
  let DashboardClassController: DashboardTsController;

  beforeEach(angular.mock.module(appDashboardTs);

  beforEach(inject((_DashboardClassController_) => {
    DashboardClassController = _DashboardClassController_;
  }));

  it('should activate', () => {
    DashboardClassController.activate();
    fail();
  });
});
