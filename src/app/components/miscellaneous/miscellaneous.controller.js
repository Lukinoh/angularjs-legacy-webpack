import myStaticAsset from 'assets/miscellaneous/my_static_asset.txt';
import myOpenOfficeFile from 'assets/miscellaneous/MyOpenOfficeFile.ods';

export default class MiscellaneousController {
    constructor(logger) {
        'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.
        this.logger = logger;

        this.myStaticAssetPath = myStaticAsset;
        this.myOpenOfficeFilePath = myOpenOfficeFile;

        this.activate();
    }

    activate() {
        this.logger.info('Miscellaneous Controller Activated !', {}, 'Status');
    }
}

