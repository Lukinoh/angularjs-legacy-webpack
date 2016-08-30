import music from 'assets/miscellaneous/Bween.mp3';

export default class MusicController {
    constructor(logger) {
        'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.
        this.logger = logger;
        this.musicPath = music;
        this.activate();
    }

    activate() {
        this.logger.info('Music Controller Activated !', {}, 'Status');
    }

    // No more private function, only public
}

