import S from 'assets/images/S.png';
import V from 'assets/images/V.png';
import E from 'assets/images/E.png';
import N from 'assets/images/N.png';

export default class ImageSelectorEs6Controller {
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
    this.logger.info('Image Selector Es6 Controller Activated !', {}, 'Status');
  }

  // Solution 2
  // Somewhat less dynamic than require because you have to import specifically all the images you need.
  // But the solution uses import/export es6 syntax.
  loadImage(letter) {
    return this.letterToImage[letter];
  }
}

