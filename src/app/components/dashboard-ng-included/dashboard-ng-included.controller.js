export default class DashboardNgIncludedController {
  constructor(logger) {
    'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.

    this.title = 'Dashboard Ng Included';
    this.logger = logger;
    this.activate();
  }

  activate() {
    this.logger.info('Dashboard Ng Included Controller Activated !', {}, 'Status');
  }

  // No more private function, only public
}

