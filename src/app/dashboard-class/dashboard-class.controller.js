/* @ngInject */
export default class DashboardClassController {
    constructor(logger) {
        this.title = 'Dashboard Class';
        this.logger = logger;
        this.activate();
    }

    activate() {
        this.logger.info('my message', {error: 'test'}, 'my title');
    }
}