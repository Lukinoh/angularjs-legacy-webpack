export default class HomeController {
    constructor(logger, _) {
        'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.

        this.logger = logger;
        this._ = _;
        this.activate();
    }

    activate() {
        this.logger.info('Home Controller Activated !', {}, 'Status');
        console.log(this._.join(['hello', 'toto'], '~'));
    }

    // No more private function, only public
}

