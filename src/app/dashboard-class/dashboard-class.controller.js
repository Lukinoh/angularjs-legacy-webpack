export default class DashboardClassController {
    constructor(logger) {
        'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.

        this.title = 'Dashboard Class';
        this.logger = logger;
        this.activate();
    }

    activate() {
        this.logger.info('Dashboard Class Controller Activated !', {}, 'Status');
    }

    // No more private function, only public
}

