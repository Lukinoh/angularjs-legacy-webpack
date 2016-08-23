export default class DashboardClassController {
    constructor(logger) {
        this.title = 'Dashboard Class';
        this.logger = logger;
        this.activate();
    }

    activate() {
        this.logger.info('my message', {error: 'test'}, 'my title');
    }

    // No more private function, only public
}