import './dashboard-ts.controller.css';

export default class DashboardTsController {

    title: string;
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

    // No more private function, only public
}
