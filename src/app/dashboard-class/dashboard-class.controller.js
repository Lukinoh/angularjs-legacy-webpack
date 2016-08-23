/* @ngInject */
export default class DashboardClassController {
    constructor(logger) {
        this.title = 'Dashboard Class';
        this.logger = logger;
        this.activate();
    }

    activate() {
        this.logger.info('Dashboard Class Controller Activated !', {}, 'Status');
    }

    // No more private function, only public
}

