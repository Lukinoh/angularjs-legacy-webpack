export default class DashboardEs6Controller {
    constructor(logger) {
        'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.

        this.title = 'Dashboard Es6';
        this.logger = logger;
        this.activate()
    }

    activate() {
        this.logger.info('Dashboard Es6 Controller Activated !', {}, 'Status');
    }

    getText() {
        return 'My Awesome Dashboard Es6';
    }
    // No more private function, only public
}

