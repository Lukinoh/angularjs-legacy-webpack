export default class HomeController {
    constructor(logger) {
        'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.

        this.logger = logger;
        this.activate();
    }

    activate() {
        this.logger.info('Home Controller Activated !', {}, 'Status');
    }

    // No more private function, only public
}

