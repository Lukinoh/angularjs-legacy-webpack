import S from "../../assets/images/S.png";
import V from "../../assets/images/V.png";
import E from "../../assets/images/E.png";
import N from "../../assets/images/N.png";

export default class ImageSelectorController {
    constructor(logger) {
        'ngInject'; // The old manner (i.e comment) work also, but this is better explicit.
        this.logger = logger;
        this.letter = 'S'; // default
        this.letterToImage = {
            S: S,
            V: V,
            E: E,
            N: N
        };


        this.activate();
    }

    activate() {
        this.logger.info('Image Selector Controller Activated !', {}, 'Status');
    }

    // Solution 1
    // loadImage(letter) {
    //    return require('../../assets/images/' + letter + '.png');
    // };

    // Solution 2
    // Somewhat less dynamic because you have to import specifically all the images you need
    // but more in sync with the ideology to use only import/export
    loadImage(letter) {
        return this.letterToImage[letter];
    }

    // No more private function, only public
}

