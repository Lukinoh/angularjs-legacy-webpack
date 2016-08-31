export default class BootstrapSassController {
    constructor(logger) {
        'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.
        this.logger = logger;

        this.activate();
    }

    activate() {
        this.logger.info('Bootstrap Sass Controller Activated !', {}, 'Status');
    }
}

