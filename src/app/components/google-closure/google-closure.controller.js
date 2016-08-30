export default class GoogleClosureController {
    constructor(logger, goog) {
        'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.
        this.logger = logger;
        this.goog = goog;

        this.activate();
    }

    activate() {
        console.log();
        this.logger.info('Google Closure Controller Activated !', {}, 'Status');
    }

    getText() {
        return this.goog.string.format('If you see this text, it means that google closure works!');
    }

    getNextText() {
        return this.goog.string.format('I remember you that we support only: goog.array, goog.string.format, and goog.structs.TreeNode');
    }
}

