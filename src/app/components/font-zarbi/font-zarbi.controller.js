export default class GoogleClosureController {
  constructor(logger) {
    'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.
    this.logger = logger;

    this.activate();
  }

  activate() {
    this.logger.info('Font Zarbi Controller Activated !', {}, 'Status');
  }
}

