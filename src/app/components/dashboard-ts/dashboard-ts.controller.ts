export default class DashboardTsController {

    title: MY.AWESOME_STRING;
    logger: any;

    constructor(logger) {
        'ngInject';
        this.title = 'Dashboard Ts';
        this.logger = logger;
        this.activate();
    }

    activate() {
        this.logger.info('Dashboard Ts Controller Activated !', {}, 'Status');
    }

    getText() {
        return 'My Awesome Dashboard Ts';
    }
    // No more private function, only public
}
